import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { getSpecializationSuggestions } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("getSpecializationSuggestions", () => {
  it("fetches successfully data from getSpecializationSuggestions API", async () => {
    const mockData = {
      data: {
        listSpecializations: {
          items: [
            {
              specialization: "Cloud Computing",
              __typename: "Specialization",
            },
          ],
          nextToken: null,
          __typename: "ModelSpecializationConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await getSpecializationSuggestions("Clou");

    expect(result).toEqual(mockData.data.listSpecializations.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listSpecializationSuggestions,
      variables: {
        filter: {
          specialization: {
            contains: "Clou",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(getSpecializationSuggestions("AI")).rejects.toThrow(mockError);
  });
});

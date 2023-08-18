import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { simpleSearch } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("simpleSearch", () => {
  it("fetches successfully data from simpleSearch API", async () => {
    const mockData = {
      data: {
        listMembers: {
          items: [
            {
              id: "8507e2aa-af84-4efb-aeb7-5fb4bc8f9bf5",
              nic: "736974161V",
              fullName: "Priyantha Miller",
              currentWorkplace: "MIT",
              designation: "Frontend Engineer",
              specialization: {
                nextToken: null,
                __typename: "ModelMemberSpecializationConnection",
              },
              profileSummary: "Leadership",
              contactDetails: null,
              previousWorkplaces: [
                {
                  workplace: "Pearson",
                  __typename: "PreviousWorkplace",
                },
              ],
              professionalInstitutes: {
                nextToken: null,
                __typename: "ModelProfessionalInstituteConnection",
              },
              createdAt: "2023-08-16T17:32:38.698Z",
              updatedAt: "2023-08-16T17:32:38.698Z",
              __typename: "Member",
            },
            {
              id: "676b5183-222d-494d-a28b-0255a75fdf92",
              nic: "914992426V",
              fullName: "Priyantha Miller",
              currentWorkplace: "99x",
              designation: "Associate Tech Lead",
              specialization: {
                nextToken: null,
                __typename: "ModelMemberSpecializationConnection",
              },
              profileSummary: "Leadership",
              contactDetails: null,
              previousWorkplaces: [
                {
                  workplace: "CakeLabs",
                  __typename: "PreviousWorkplace",
                },
              ],
              professionalInstitutes: {
                nextToken: null,
                __typename: "ModelProfessionalInstituteConnection",
              },
              createdAt: "2023-08-16T17:30:56.191Z",
              updatedAt: "2023-08-16T17:30:56.191Z",
              __typename: "Member",
            },
          ],
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await simpleSearch("fullName", "Priyantha Miller");

    expect(result).toEqual(mockData.data.listMembers.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listMembers,
      variables: {
        filter: {
          fullName: {
            eq: "Priyantha Miller",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(simpleSearch("name", "John")).rejects.toThrow(mockError);
  });
});

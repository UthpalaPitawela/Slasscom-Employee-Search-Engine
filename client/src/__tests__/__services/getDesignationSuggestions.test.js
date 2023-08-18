import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { getDesignationSuggestions } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("getDesignationSuggestions", () => {
  it("fetches successfully data from getDesignationSuggestions API", async () => {
    const mockData = {
      data: {
        listMembers: {
          items: [
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Associate Software Engineer",
              __typename: "Member",
            },
            {
              designation: "Software Engineer",
              __typename: "Member",
            },
          ],
          nextToken:
            "eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjRIa3lYa3VUVDZrT3BNZUZuR0RxQW04bmZBUEQvTWhwUUFSNjY0cDQ3NlIwQWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJOR0ZWVUdwNGFVbG1iRFpHZDBsdFFYWktSSFpaWXpocWRVdFRNbXh0U0RoUmJHVXpURFpEYTBwNVVITllUMHQwTm1GcmFVOXhVV2xHV0hSVFNXRmlUbEU5UFFBQkFBZGhkM010YTIxekFFdGhjbTQ2WVhkek9tdHRjenAxY3kxM1pYTjBMVEU2TURFMk9UWXlNRFU1T1RNd09tdGxlUzg1TldNNE5Ua3dNaTFtWm1GbUxUUTJZMlV0WVRZMFpDMWtaV0l5T1RRMlkySTNNamNBdUFFQ0FRQjQ3OVpueXJmbWsxVU11cFExVHA0YU9ONEM4SDltbDJTaU4xRXMwbE9VRklFQkxJSllpYnk4TXZnNXBaQ0Y2Z090c0FBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFRElZNHJkemtrUmUxcUh6WFpnSUJFSUE3dVZiT3Z4UWVRQmdSQk5JYXJOOEM0LzR5eUk0RmJqMXJiMk1QRWcxZTk3Z1NGWGVxMGdvMmN0SzNIaXByZXR6dGxSTEpsTXFINFhFbWFEc0NBQUFRQUlnY0FDRG9OQ3piL1Z2bFNCc3lITlp1QlBoSnFJcmcwQ1I3REZmZXFLQjlSVXQ1SHRtdXc1NlBDQUxVRkRBTzVmLy8vLzhBQUFBQkFBQUFBQUFBQUFBQUFBQUJBQUFCczFEVTRLemZRS3NDVVdzVmFYcFhDRmVTS1JMUjU0R3p6T0xTQTdmY0RzTm4yY3NlcnBqZUpOVmRvcTQ5Qm1vT3dWNC9uVXMwYlJHZmIvUzJXRzZUcVk2OER4d1Ayd01oU0VqeVR0U0oxVTJuWFlIN3M3Unl3V3lXaHd1TUlidnlHRnlQUkZ5WldnVWFFQlptUTBOT0VKZ3hVaHZVR2xyUlprQUszZTB0SUluVVdraUIwN0M4Q3ZkWUFiUnFGRnc3cC9IWXJTbGlyMVJzNndaREJsOVBaL0ZSYTB3Z3NBK2ZwNHhlWUFhaitmRGt5Z3lVbVNwSjhBN09yMW56ZDh1bmszb1REV2VjRUhrSG5PV1FUdEp6dDZsT3B5N0FJRjZNZ3RoclUwUWN0QXdDTFZSaEhMRHhLZjVvYnBYditudVNGRkFIM2taakhnR3Zsd3kwbVRCNFc4d1BuaHdncWhYdGtsZmtrL2hlWDlpeGZrZlp0eDFBZEhGUzdERktMUGZnQ2QwT0hmenVvNDlUa29YZ0JFODgwTXZFa0UycHlPSE5UNFl1TzdiZmtpVXpRRHJGTUszZmQvemJ5UnYzeklRaVF5TVhNempXOERBWDdCYTE3R0w3SnEvWW1FV2FSc0VmR1R3dEdIb3ZzdnpSeXNITXJpUHJvQ2Znc2dqTDJ3enNSMVBiT3lhZUdMZ1VPTnFtaFdPeGFxR1U2OXJlbFBaUjk1MUNGK2dnYzdQMDV0RFhHQmMxVDYrU01rbWU4aGE3RTdheGtRTGE0R1dReDNZeS9vQ3FBSmpVN0pvQVp6QmxBakVBdGkxZTZCZk9zTURZeWhwU0QyVGcycEErd0dlb2p0U0pFR0lmWEkwSkJNYkhNNk1GMGFLMnUwWVFsZW16RHFKd0FqQU5OMGkzT1NGWkdYZllLM1hYSXk5ZTNuOWdLYk5JTzBQbXRkTW1Od3oxTWRYUnkwa0Q4V3dSaTgxN3l1R09uNm89In0=",
          __typename: "ModelMemberConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await getDesignationSuggestions("Soft");

    expect(result).toEqual(mockData.data.listMembers.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listDesignationSuggestions,
      variables: {
        filter: {
          designation: {
            contains: "Soft",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(getDesignationSuggestions("Associ")).rejects.toThrow(
      mockError
    );
  });
});

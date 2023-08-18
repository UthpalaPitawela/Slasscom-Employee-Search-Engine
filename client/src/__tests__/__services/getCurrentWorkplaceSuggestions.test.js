import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { getCurrentWorkplaceSuggestions } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("getCurrentWorkplaceSuggestions", () => {
  it("fetches successfully data from getCurrentWorkplaceSuggestions API", async () => {
    const mockData = {
      data: {
        listMembers: {
          items: [
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
            {
              currentWorkplace: "CakeLabs",
              __typename: "Member",
            },
          ],
          nextToken:
            "eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjRzQVAyYkltbUc2K3d6dzNIdlpOT1Vyek1pL2FLMnFNZzVxMExXbDBDaERJQWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJlVXBNUzFoaFNXcFRhMU50U1ZGcGN6aFNTVGN5UzFkNk9FVnVlaXRzTWpSaGRsQkROMFpZVERKdFNXOUVRa1pxVkdWU2FFSlBVRlFyVVZSVlFVZFJLMEU5UFFBQkFBZGhkM010YTIxekFFdGhjbTQ2WVhkek9tdHRjenAxY3kxM1pYTjBMVEU2TURFMk9UWXlNRFU1T1RNd09tdGxlUzg1TldNNE5Ua3dNaTFtWm1GbUxUUTJZMlV0WVRZMFpDMWtaV0l5T1RRMlkySTNNamNBdUFFQ0FRQjQ3OVpueXJmbWsxVU11cFExVHA0YU9ONEM4SDltbDJTaU4xRXMwbE9VRklFQjM2WFd0VExqdnRUdXEvWjlIdTdtckFBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFREpqVmVIV2dvWWhDYWg0cEFRSUJFSUE3STROOWR4N0NNYWJhSFl4S3pmOEwyNEtEQmFUd2NXTEMra01HWnpRKy9wN25tRXAvYUJ2OGlMWmNxMFgxLzZMZVd2VHFwVGptK1ZPMGpuTUNBQUFRQUpickxqNG1Jb2ZEYi9HK1hpN2VucjVNNk5vLy9mQ1Y3emM1dlVSeWRNNzl0RnFSelZaOFkweGpMMnBWTFlxdWZ2Ly8vLzhBQUFBQkFBQUFBQUFBQUFBQUFBQUJBQUFCczloYzNhNkRNZUZ6UjJCMHdOQS9uZUxoTG9ZRmRONm1jOHk0bU9SVEkwM2ZBQnRYUWZXa2U1Yi9VZ2lIbmcxMDlXTmlJcHVNTUM0U0tNYnJMSWppQy9tTm1ibWs5aHBBMHVMY2dJWnJQdHZRbHZBNTdUQ2JtNTNabkFGQlBJdDZRcFlLZmpvejQ4MDR3UGN4djJiaGdJYWRuaE5jNmhCU2lxalZjcnkxMTE1ZUVDdEdlUmNSWTRRUWpLNkFmVUpjU3duWGg1L1U1SFEwWko1WVFNakFpTmRPS3VpY0JSUm4rSitNdzJ0b0RJU0NMNlNwb1U5VXFXUis2Wis1VElFRnNSaGlsT3dHVkY4Vng3dWJxenRRZDg3YjRMQys1L0w0OHB2OWFGSFIydFJyZWJIcDhLa01xOURQY1llLzFUcnQ0akVXQ2hWaDR0UUhQMTRqNWFWYzZSaEV2MkdWQUZ3bkw0ZWplRlRiVFJJMGFPQ2VzWFhqcjgwRVN0Zjl1Nlo4SStmZVhPdHdSUXBUNVJxM2E4cGl1M1VybS9PYTE1RWRtTGhTTDFYV0t1VUJpSzh1c2F2QmVUWDJvZTY2SWwzMm5aZ2Q0SkxKaEkxV1JkWU51K3ppbCtzYzRnTC9lMXpKTXVZVHNCLyt2TERJNENVZzdOaVQ4MTBlampCeit3RWpnRzVka0hFR2xPOTB3bnBqZjZrMm1IQ0NQa2VkbVo5dzVwd0NBSGZZb0l5dnlxMjZCWFZiRHhHQVRSazNwZUFLeFRscEYxQTB5Mk5EaXFzd1pvRGNTbFlkenFvQVp6QmxBakF4amNYdVdiLzI4d05uTWtzZmF6Vkg4RmFIaFpWdkVBRVNOR051VGdkRERJT2JkOWlpbHowcWtuUnNKRkl2TExVQ01RQ3N1UGxRT3pIZmpnSWU1R3RhcGJQYWJ5T0hmOUxVbTZ6eEt2Y0xyUkZVcDQzS2VQRlBPWkZDREY0akp2YkJRekU9In0=",
          __typename: "ModelMemberConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await getCurrentWorkplaceSuggestions("Cake");

    expect(result).toEqual(mockData.data.listMembers.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listCurrentWorkplaceSuggestions,
      variables: {
        filter: {
          currentWorkplace: {
            contains: "Cake",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(getCurrentWorkplaceSuggestions("99")).rejects.toThrow(
      mockError
    );
  });
});

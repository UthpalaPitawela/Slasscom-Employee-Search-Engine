import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { getFullnameSuggestions } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("getFullnameSuggestions", () => {
  it("fetches successfully data from getFullnameSuggestions API", async () => {
    const mockData = {
      data: {
        listMembers: {
          items: [
            {
              fullName: "Priyantha Miller",
              __typename: "Member",
            },
            {
              fullName: "Priyantha Johnson",
              __typename: "Member",
            },
            {
              fullName: "Priyantha Fernando",
              __typename: "Member",
            },
            {
              fullName: "Priyantha Miller",
              __typename: "Member",
            },
            {
              fullName: "Priyantha Rajapaksha",
              __typename: "Member",
            },
          ],
          nextToken:
            "eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjRCRXAyVmhZZDNGdi9QaVhjdTJ0bG1MUVNFTVU1OXU0dE1EMTdFZ2srWVZ3QWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJiMGxpUlVsNVdXZ3JVV3N6VEVkUVZIb3dkVzk0U1hoVE0yZDRieTg1ZWxabFRrTmFXbWROYjJkU01WWkdPVWMyYWpkVVpIUlZLMmxDUm5KNlkwWTJSSGM5UFFBQkFBZGhkM010YTIxekFFdGhjbTQ2WVhkek9tdHRjenAxY3kxM1pYTjBMVEU2TURFMk9UWXlNRFU1T1RNd09tdGxlUzg1TldNNE5Ua3dNaTFtWm1GbUxUUTJZMlV0WVRZMFpDMWtaV0l5T1RRMlkySTNNamNBdUFFQ0FRQjQ3OVpueXJmbWsxVU11cFExVHA0YU9ONEM4SDltbDJTaU4xRXMwbE9VRklFQk5lK2VDYlN2dDJrMG1zbVhVbERYOWdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFREc0ZTV3SytmVm95LzRpQ1RnSUJFSUE3Z3dxY1QwK1IrVlVPRHh3NENlZExUQ1NQVFJaMWVnYS8yQ211QkdiYTFpbCtmZGhxajVrd01OWUNOYmZxZDdXS3d4KzlOUEcrZVBSdHY4Z0NBQUFRQUgra0NNQ29KOXF0RkFYZ3IyZlBZbEZtMXVxUFM2UVY3NEswNzRZZkV2Q3BzS1dYNVlSQisxWkROK0dPT1BDUFJQLy8vLzhBQUFBQkFBQUFBQUFBQUFBQUFBQUJBQUFCczBqenB0UHhRNWlqOTVBRHFvZ29CTnJWa1d5T2tSR082M0w3bko0bVBoOU5jL3NsWVo4bWZXbEppMXkvVTZHL0VRb3krRnNWN2ZiQ3pLVGFzQXU5WThBbjJCUDRuOENRNjVFTWNEdDdyWEMvb1ZmallhVmErbmZDeDdYNHQ3QU9IZmtCQlA0cUZOMFlyNXEwaEdHYlUrTTkzNG5sbnhuUTJxSGEyeHFFUHpIOVp1L01oclZXTlBaTVpxcmcrMU1tbXdhc0pFUzVFV2RHMGVnb0VxbDRnNG9wS1hWQ0FQS01QUEc1S0J2MDhVUEZ6T0w3Y3YvbE9xbS9PdkZYNUVwZ0FlL1dVcVV6USs4THJBSzFFd0l6MDRIMmc4d0xKMWhnbjI4NkZrOStJRzExekZtbU5xejdTb3MrZzZZLzkyKzZWQ3VUUWV3VTJyVEtDd3Z5dE9jR2pWZWgyZ0FENFFmQ3Ywa1NhTXR6T3FJRnZpSU51WHFqVmhNbFJ1TE96cDNhb3BhUFhjZFI5and5ZWtUUk1FVVc0S2VFb1BycFF2TzlQMkVqd2dKdWJmaVhlUzlSVDVEZ1FHQWFoS2pDZkhPQy9DRzdaT2tzRG5Qb25xWHpVbDZacWt4QnVMUmRRSkRyMHFZVzlBd2luNFk1NnVERnh5RDFOOWo1KzI2UGN4RzF5Y2JDSTZmanN4dmdPamxtRWYyWGpwRmJzMmd0dkhna1lCOThzMmFBOWl3REVhYnptM1lEblNjT1NxTGFKSUNRZGFESnR1MzlybFRscGJoYlp3ckNxZ0s2RnNVQVp6QmxBakVBalk4K1NQQ3N6a2hkbmpiZ0ovMzJ3MHdOY0xxWGVBWGVVK05NVEVNT3pleVZ1Yk12dXBySGJVcDE3STFuVzV0UEFqQVcwRFpVcTFqbFBsalJMUmUrb0dMNGljMEM5aDNNL1R3NFNoNDhDcXN3cVZlWkxzSjB0aDNCODJVZlRSYlZUdE09In0=",
          __typename: "ModelMemberConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await getFullnameSuggestions("Priy");

    expect(result).toEqual(mockData.data.listMembers.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listNameSuggestions,
      variables: {
        filter: {
          fullName: {
            contains: "Priy",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(getFullnameSuggestions("Associ")).rejects.toThrow(mockError);
  });
});

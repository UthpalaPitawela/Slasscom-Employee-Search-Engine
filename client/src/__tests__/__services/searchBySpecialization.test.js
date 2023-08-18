import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { searchBySpecialization } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("searchBySpecialization", () => {
  it("fetches successfully data from searchBySpecialization API", async () => {
    const mockData = {
      data: {
        listSpecializations: {
          items: [
            {
              id: "b98c7813-c6e0-46bd-bacf-cf46720551a3",
              specialization: "Cloud Computing",
              member: {
                items: [
                  {
                    member: {
                      nic: "770645891V",
                      id: "84ec3dfd-1134-4050-aa4f-4edd89a6b259",
                      fullName: "Priyantha Rajapaksha",
                      designation: "DevOps Engineer",
                      currentWorkplace: "WSO2",
                      profileSummary: "Self-motivated",
                    },
                  },
                  {
                    member: {
                      nic: "630696489V",
                      id: "d90f4272-6c0b-4247-b72a-90348685166b",
                      fullName: "Emma Williams",
                      designation: "Associate Software Engineer",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Team Player",
                    },
                  },
                  {
                    member: {
                      nic: "774177989V",
                      id: "3ecd798e-1e2c-405e-9ee7-185c2d266700",
                      fullName: "Emma Rodriguez",
                      designation: "Tech Lead",
                      currentWorkplace: "99x",
                      profileSummary: "Hard working person",
                    },
                  },
                  {
                    member: {
                      nic: "736974161V",
                      id: "8507e2aa-af84-4efb-aeb7-5fb4bc8f9bf5",
                      fullName: "Priyantha Miller",
                      designation: "Frontend Engineer",
                      currentWorkplace: "MIT",
                      profileSummary: "Leadership",
                    },
                  },
                  {
                    member: {
                      nic: "883697496V",
                      id: "418d6b29-1ec6-4ac9-92a5-013de759fbbe",
                      fullName: "Prabhath Fernando",
                      designation: "Associate Tech Lead",
                      currentWorkplace: "MIT",
                      profileSummary: "Leadership",
                    },
                  },
                  {
                    member: {
                      nic: "916250525V",
                      id: "2fa18d0e-e919-41a7-9648-99e868fa454f",
                      fullName: "Emily Sumanasekara",
                      designation: "Frontend Engineer",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Reliable",
                    },
                  },
                  {
                    member: {
                      nic: "678454881V",
                      id: "e42c80a5-08f4-4e2c-b5d4-e3fbf6ad27f2",
                      fullName: "Prabhath Rodriguez",
                      designation: "Tech Lead",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Team Player",
                    },
                  },
                  {
                    member: {
                      nic: "824868512V",
                      id: "85e3b3ae-f91e-4d53-b124-6a1136b1c497",
                      fullName: "Olivia Rajapaksha",
                      designation: "Support Engineer",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Leadership",
                    },
                  },
                  {
                    member: {
                      nic: "794490667V",
                      id: "8cbacb24-a397-40c4-8738-7e4293245634",
                      fullName: "Prabhath Johnson",
                      designation: "Associate Tech Lead",
                      currentWorkplace: "99x",
                      profileSummary: "Hard working person",
                    },
                  },
                  {
                    member: {
                      nic: "977414796V",
                      id: "d9abadd0-029d-482b-91e7-bdc4f7f8cf2a",
                      fullName: "Michael Sumanasekara",
                      designation: "Support Engineer",
                      currentWorkplace: "MIT",
                      profileSummary: "Reliable",
                    },
                  },
                  {
                    member: {
                      nic: "620313070V",
                      id: "084c0040-859f-4a58-bdd1-5acd7b8122ac",
                      fullName: "Kumudu Perera",
                      designation: "Associate Tech Lead",
                      currentWorkplace: "MIT",
                      profileSummary: "Self-motivated",
                    },
                  },
                  {
                    member: {
                      nic: "812244345V",
                      id: "62db992f-19aa-45e0-b8fe-802ee0be130e",
                      fullName: "Priyantha Fernando",
                      designation: "Software Engineer",
                      currentWorkplace: "99x",
                      profileSummary: "Reliable",
                    },
                  },
                  {
                    member: {
                      nic: "637262486V",
                      id: "3a512bfd-078f-4015-abd4-e122e3c2fb47",
                      fullName: "Michael Pilapitiya",
                      designation: "Tech Lead",
                      currentWorkplace: "MIT",
                      profileSummary: "Reliable",
                    },
                  },
                  {
                    member: {
                      nic: "738669966V",
                      id: "926b6f7c-07b5-412b-a16e-2db00ff77738",
                      fullName: "Emily Perera",
                      designation: "Associate Software Engineer",
                      currentWorkplace: "MIT",
                      profileSummary: "Reliable",
                    },
                  },
                  {
                    member: {
                      nic: "649815387V",
                      id: "433ea100-4c80-44f2-a161-7459d6ebaaaa",
                      fullName: "Umesh Martinez",
                      designation: "Tech Lead",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Leadership",
                    },
                  },
                  {
                    member: {
                      nic: "980242809V",
                      id: "9cafb56f-7250-4429-91ee-ade8fe127911",
                      fullName: "Mahinda Garcia",
                      designation: "Tech Lead",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Self-motivated",
                    },
                  },
                  {
                    member: {
                      nic: "974921178V",
                      id: "7e915453-9a1d-404b-9c8b-0ef3bffd082d",
                      fullName: "Umesh Gamage",
                      designation: "Associate Software Engineer",
                      currentWorkplace: "CakeLabs",
                      profileSummary: "Responsible",
                    },
                  },
                  {
                    member: {
                      nic: "664507540V",
                      id: "9a409848-371f-4a6c-8cfb-9ab55f72d3b9",
                      fullName: "David Garcia",
                      designation: "DevOps Engineer",
                      currentWorkplace: "WSO2",
                      profileSummary: "Team Player",
                    },
                  },
                  {
                    member: {
                      nic: "806090471V",
                      id: "4873f644-61dc-4f73-b401-85cf1cf79166",
                      fullName: "Mahinda Garcia",
                      designation: "Software Engineer",
                      currentWorkplace: "WSO2",
                      profileSummary: "Enthusiastic",
                    },
                  },
                  {
                    member: {
                      nic: "702904673V",
                      id: "b1f96b30-99ad-4db1-a5c5-a048fb9d1007",
                      fullName: "Umesh Rodriguez",
                      designation: "Associate Software Engineer",
                      currentWorkplace: "99x",
                      profileSummary: "Team Player",
                    },
                  },
                  {
                    member: {
                      nic: "672435397V",
                      id: "7641e1a8-e2a8-4d22-831e-f73fb256c6ca",
                      fullName: "Emma Perera",
                      designation: "Associate Tech Lead",
                      currentWorkplace: "MIT",
                      profileSummary: "Team Player",
                    },
                  },
                ],
                nextToken: null,
                __typename: "ModelMemberSpecializationConnection",
              },
              createdAt: "2023-08-16T17:30:55.485Z",
              updatedAt: "2023-08-16T17:30:55.485Z",
              __typename: "Specialization",
            },
          ],
          nextToken: null,
          __typename: "ModelSpecializationConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await searchBySpecialization("Cloud Computing");

    expect(result).toEqual(
      mockData.data.listSpecializations.items[0].member.items
    );
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listSpecializations,
      variables: {
        filter: {
          specialization: {
            eq: "Cloud Computing",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(searchBySpecialization("spec", "AI")).rejects.toThrow(
      mockError
    );
  });
});

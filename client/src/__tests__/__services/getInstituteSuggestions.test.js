import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { getInstituteSuggestions } from "../../services/queries";
import * as queries from "../../graphql/queries";

jest.mock("@aws-amplify/api");

describe("getInstituteSuggestions", () => {
  it("fetches successfully data from getInstituteSuggestions API", async () => {
    const mockData = {
      data: {
        listProfessionalInstitutes: {
          items: [
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IESL",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "AAT",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "IJSE",
              __typename: "ProfessionalInstitute",
            },
            {
              institute: "CIMA",
              __typename: "ProfessionalInstitute",
            },
          ],
          nextToken:
            "eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjRlY2MrVUtaNkpWZTRBaE0zOFBhMEoxbmo4MWtlUkJGaE5UOFJuMS81am1vQWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJjWFY0V0ZJelVsQjRjVUpuYVRsNldWUkVObFo1VFRSWGNqTlZPR3B6Y0d4U1YyOTVhRzFXV1RsdlZHMHpaR3RTUlc4clFTdFNkRzB2YlhadE9VWkpjV2M5UFFBQkFBZGhkM010YTIxekFFdGhjbTQ2WVhkek9tdHRjenAxY3kxM1pYTjBMVEU2TURFMk9UWXlNRFU1T1RNd09tdGxlUzg1TldNNE5Ua3dNaTFtWm1GbUxUUTJZMlV0WVRZMFpDMWtaV0l5T1RRMlkySTNNamNBdUFFQ0FRQjQ3OVpueXJmbWsxVU11cFExVHA0YU9ONEM4SDltbDJTaU4xRXMwbE9VRklFQmhhT0J3bDR5ZFVEcFZJWWFYUWZHOWdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFREw1eVd1V2J0K2xjMGp2MnJRSUJFSUE3aThVYkhLUk9SN05lSTBEc1lHYzBSVHFtWjM3dGd4VlRLZFNuRWdteExNYnkrenhQeklYMW1BZ0NiZlF6aC96a2ZyYVBmYlpwek4rczc1UUNBQUFRQUlvSVVWdFBENXE3cGMvSHAwaWFVUEdYdFNDcTdtcHR3aUl3UW9HTy9rU25tcVV1QUhvYklGQXV6K1pxbDBxc2F2Ly8vLzhBQUFBQkFBQUFBQUFBQUFBQUFBQUJBQUFCd3A5R29iUzE5NHU1bUVCcjViaDFoK0JNZWkyN2lVZmE2LzkxSTdOdVlwTHM5YXNlVzhWaDhRR211NmZqLzVoOEd1ekdOc1g2SU4vZVgvYnNEbEsyNmpSNVNCZjBKbzhPcWxZTWtUaVhzL3R0UGlsb01CY2R3bXowSnljblZqeUowL3l0bUdSVzVxRkhCNlBJeHE5L1cxb2tYSytEbkQvQlVjYTNSVExZSzhLWFlCZ0FlaUhaSUtMM2NqcVUzbGE3K0Q2d0QyeURCeGdOL2FCbzRCRnJmTVY4MFN2YVVVRTlBM2czSFhUTW16SVAxVDVCQ1RlVkIrRTRMNWpzSTdSalFUTndhZXZRbjJzcXVHeERHejRFNW1GbEc2SmRXSklDU3RIYWExR0pwUDBydzFmdXdQVmU4V2ZVMFMyUk1VS1FMK2VzTDUwWGRpcHJCbk1KZUNiNFdHUCtrcWgyYjBVcllZbEpSclhNYm42bzZ5dWt2SmgyQmd0eE1ONStYTmlicXZuNTdYQm9MZmJRS0NraHdSR1BIRlhsenhlZDExVGlnMHpmVGVrV1FWY05VYkkvMmVsdXk5bGdjbzMwYXo0QzI1ZlZ2YXplZVNqZ3hFemlGazVSWVFTTWhYQ0l5VVBTR1h4NDRkVkE3MGwvYlNzMERNaFJJVzVqcVhLV1RiRWJQT1NoT3BUWEt3d1NVQk1oZ3hWUC80Smw0ZVFzMzlva09JaStjdDJtYkxTMkR2bUl0bkRQYkEvbUJ0TG1kTGJ1eWVKbDI5VnBrVDVBbmR2ZGVBQVpsdnhKU3VYWGtyeHFoa2VDNFJKYjdZK2g1UjhBWnpCbEFqRUF4Q05KeVluckdsdURKOHF3NEFRbEkwM3c4NndWSFZZRDBielNSKzhGbVAveFpkc2JSeWdlemZuTlZEcDBleExDQWpCUEJmMThtdmhrNzVPeHJlYXA2LzJKNGpqb2dRcStaZnZSUkZvODFNRWFCOGJPK1Q1MDBmQmdwSTlkKzhhbEtzWT0ifQ==",
          __typename: "ModelProfessionalInstituteConnection",
        },
      },
    };
    API.graphql.mockResolvedValue(mockData);

    const result = await getInstituteSuggestions("AA");

    expect(result).toEqual(mockData.data.listProfessionalInstitutes.items);
    expect(API.graphql).toHaveBeenCalledWith({
      query: queries.listProfessionalInstituteSuggestions,
      variables: {
        filter: {
          institute: {
            contains: "AA",
          },
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  });
  it("handles API errors", async () => {
    const mockError = new Error("API error");

    API.graphql.mockImplementation(() => Promise.reject(mockError));

    await expect(getInstituteSuggestions("CIM")).rejects.toThrow(mockError);
  });
});

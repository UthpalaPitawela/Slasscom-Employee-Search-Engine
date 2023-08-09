/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      nic
      fullName
      currentWorkplace
      designation
      specialization {
        items {
          id
          memberId
          specializationId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      profileSummary
      contactDetails {
        personal {
          mobile
          email
          __typename
        }
        official {
          mobile
          email
          __typename
        }
        __typename
      }
      previousWorkplaces {
        items {
          id
          memberId
          previousWorkplaceId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      professionalInstitutes {
        items {
          id
          memberId
          professionalInstituteId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nic
        fullName
        currentWorkplace
        designation
        specialization {
          nextToken
          __typename
        }
        profileSummary
        contactDetails {
          __typename
        }
        previousWorkplaces {
          nextToken
          __typename
        }
        professionalInstitutes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpecialization = /* GraphQL */ `
  query GetSpecialization($id: ID!) {
    getSpecialization(id: $id) {
      id
      specialization
      member {
        items {
          id
          memberId
          specializationId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpecializations = /* GraphQL */ `
  query ListSpecializations(
    $filter: ModelSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecializations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        specialization
        member {
          items {
            member {
              id
              fullName
              designation
              currentWorkplace
              profileSummary
              specialization {
                items {
                  specialization {
                    specialization
                  }
                }
              }
            }
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPreviousWorkplace = /* GraphQL */ `
  query GetPreviousWorkplace($id: ID!) {
    getPreviousWorkplace(id: $id) {
      id
      workplace
      designations {
        designation
        from
        to
        __typename
      }
      member {
        items {
          id
          memberId
          previousWorkplaceId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPreviousWorkplaces = /* GraphQL */ `
  query ListPreviousWorkplaces(
    $filter: ModelPreviousWorkplaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreviousWorkplaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workplace
        designations {
          designation
          from
          to
          __typename
        }
        member {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfessionalInstitute = /* GraphQL */ `
  query GetProfessionalInstitute($id: ID!) {
    getProfessionalInstitute(id: $id) {
      id
      name
      title
      duration {
        from
        to
        __typename
      }
      member {
        items {
          id
          memberId
          professionalInstituteId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProfessionalInstitutes = /* GraphQL */ `
  query ListProfessionalInstitutes(
    $filter: ModelProfessionalInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessionalInstitutes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        duration {
          from
          to
          __typename
        }
        member {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMemberSpecialization = /* GraphQL */ `
  query GetMemberSpecialization($id: ID!) {
    getMemberSpecialization(id: $id) {
      id
      memberId
      specializationId
      member {
        id
        nic
        fullName
        currentWorkplace
        designation
        specialization {
          nextToken
          __typename
        }
        profileSummary
        contactDetails {
          __typename
        }
        previousWorkplaces {
          nextToken
          __typename
        }
        professionalInstitutes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      specialization {
        id
        specialization
        member {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMemberSpecializations = /* GraphQL */ `
  query ListMemberSpecializations(
    $filter: ModelMemberSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberSpecializations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        specializationId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        specialization {
          id
          specialization
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberSpecializationsByMemberId = /* GraphQL */ `
  query MemberSpecializationsByMemberId(
    $memberId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberSpecializationsByMemberId(
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        specializationId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        specialization {
          id
          specialization
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberSpecializationsBySpecializationId = /* GraphQL */ `
  query MemberSpecializationsBySpecializationId(
    $specializationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberSpecializationsBySpecializationId(
      specializationId: $specializationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        specializationId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        specialization {
          id
          specialization
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMemberPrevWorkPlace = /* GraphQL */ `
  query GetMemberPrevWorkPlace($id: ID!) {
    getMemberPrevWorkPlace(id: $id) {
      id
      memberId
      previousWorkplaceId
      member {
        id
        nic
        fullName
        currentWorkplace
        designation
        specialization {
          nextToken
          __typename
        }
        profileSummary
        contactDetails {
          __typename
        }
        previousWorkplaces {
          nextToken
          __typename
        }
        professionalInstitutes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      previousWorkplace {
        id
        workplace
        designations {
          designation
          from
          to
          __typename
        }
        member {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMemberPrevWorkPlaces = /* GraphQL */ `
  query ListMemberPrevWorkPlaces(
    $filter: ModelMemberPrevWorkPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberPrevWorkPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        previousWorkplaceId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        previousWorkplace {
          id
          workplace
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberPrevWorkPlacesByMemberId = /* GraphQL */ `
  query MemberPrevWorkPlacesByMemberId(
    $memberId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberPrevWorkPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberPrevWorkPlacesByMemberId(
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        previousWorkplaceId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        previousWorkplace {
          id
          workplace
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberPrevWorkPlacesByPreviousWorkplaceId = /* GraphQL */ `
  query MemberPrevWorkPlacesByPreviousWorkplaceId(
    $previousWorkplaceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberPrevWorkPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberPrevWorkPlacesByPreviousWorkplaceId(
      previousWorkplaceId: $previousWorkplaceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        previousWorkplaceId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        previousWorkplace {
          id
          workplace
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMemberProfInstitute = /* GraphQL */ `
  query GetMemberProfInstitute($id: ID!) {
    getMemberProfInstitute(id: $id) {
      id
      memberId
      professionalInstituteId
      member {
        id
        nic
        fullName
        currentWorkplace
        designation
        specialization {
          nextToken
          __typename
        }
        profileSummary
        contactDetails {
          __typename
        }
        previousWorkplaces {
          nextToken
          __typename
        }
        professionalInstitutes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      professionalInstitute {
        id
        name
        title
        duration {
          from
          to
          __typename
        }
        member {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMemberProfInstitutes = /* GraphQL */ `
  query ListMemberProfInstitutes(
    $filter: ModelMemberProfInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberProfInstitutes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        professionalInstituteId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        professionalInstitute {
          id
          name
          title
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberProfInstitutesByMemberId = /* GraphQL */ `
  query MemberProfInstitutesByMemberId(
    $memberId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberProfInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberProfInstitutesByMemberId(
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        professionalInstituteId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        professionalInstitute {
          id
          name
          title
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const memberProfInstitutesByProfessionalInstituteId = /* GraphQL */ `
  query MemberProfInstitutesByProfessionalInstituteId(
    $professionalInstituteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMemberProfInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberProfInstitutesByProfessionalInstituteId(
      professionalInstituteId: $professionalInstituteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        professionalInstituteId
        member {
          id
          nic
          fullName
          currentWorkplace
          designation
          profileSummary
          createdAt
          updatedAt
          __typename
        }
        professionalInstitute {
          id
          name
          title
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

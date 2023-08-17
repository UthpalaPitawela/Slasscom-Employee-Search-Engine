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
        workplace
        designations {
          designation
          from
          to
          __typename
        }
        __typename
      }
      professionalInstitutes {
        items {
          id
          memberId
          title
          institute
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
          workplace
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


export const listNameSuggestions = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        fullName

        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDesignationSuggestions = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        designation

        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCurrentWorkplaceSuggestions = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        currentWorkplace

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
              nic
              id
              fullName
              designation
              currentWorkplace
              profileSummary
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

export const listSpecializationSuggestions = /* GraphQL */ `
  query ListSpecializations(
    $filter: ModelSpecializationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecializations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        specialization
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
      memberId
      title
      institute
      duration {
        from
        to
        __typename
      }
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
          workplace
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
        memberId
        title
        institute
        duration {
          from
          to
          __typename
        }
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProfessionalInstituteSuggestions = /* GraphQL */ `
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
        institute
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const professionalInstitutesByMemberId = /* GraphQL */ `
  query ProfessionalInstitutesByMemberId(
    $memberId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProfessionalInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    professionalInstitutesByMemberId(
      memberId: $memberId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        memberId
        title
        institute
        duration {
          from
          to
          __typename
        }
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
          workplace
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

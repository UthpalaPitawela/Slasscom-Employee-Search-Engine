/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      nic
      name
      personalEmail
      designation
      currentWorkplace
      specialization
      professionalInstitutes
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
        name
        personalEmail
        designation
        currentWorkplace
        specialization
        professionalInstitutes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

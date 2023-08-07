/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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

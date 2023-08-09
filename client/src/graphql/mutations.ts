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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createSpecialization = /* GraphQL */ `
  mutation CreateSpecialization(
    $input: CreateSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    createSpecialization(input: $input, condition: $condition) {
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
export const updateSpecialization = /* GraphQL */ `
  mutation UpdateSpecialization(
    $input: UpdateSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    updateSpecialization(input: $input, condition: $condition) {
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
export const deleteSpecialization = /* GraphQL */ `
  mutation DeleteSpecialization(
    $input: DeleteSpecializationInput!
    $condition: ModelSpecializationConditionInput
  ) {
    deleteSpecialization(input: $input, condition: $condition) {
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
export const createPreviousWorkplace = /* GraphQL */ `
  mutation CreatePreviousWorkplace(
    $input: CreatePreviousWorkplaceInput!
    $condition: ModelPreviousWorkplaceConditionInput
  ) {
    createPreviousWorkplace(input: $input, condition: $condition) {
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
export const updatePreviousWorkplace = /* GraphQL */ `
  mutation UpdatePreviousWorkplace(
    $input: UpdatePreviousWorkplaceInput!
    $condition: ModelPreviousWorkplaceConditionInput
  ) {
    updatePreviousWorkplace(input: $input, condition: $condition) {
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
export const deletePreviousWorkplace = /* GraphQL */ `
  mutation DeletePreviousWorkplace(
    $input: DeletePreviousWorkplaceInput!
    $condition: ModelPreviousWorkplaceConditionInput
  ) {
    deletePreviousWorkplace(input: $input, condition: $condition) {
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
export const createProfessionalInstitute = /* GraphQL */ `
  mutation CreateProfessionalInstitute(
    $input: CreateProfessionalInstituteInput!
    $condition: ModelProfessionalInstituteConditionInput
  ) {
    createProfessionalInstitute(input: $input, condition: $condition) {
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
export const updateProfessionalInstitute = /* GraphQL */ `
  mutation UpdateProfessionalInstitute(
    $input: UpdateProfessionalInstituteInput!
    $condition: ModelProfessionalInstituteConditionInput
  ) {
    updateProfessionalInstitute(input: $input, condition: $condition) {
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
export const deleteProfessionalInstitute = /* GraphQL */ `
  mutation DeleteProfessionalInstitute(
    $input: DeleteProfessionalInstituteInput!
    $condition: ModelProfessionalInstituteConditionInput
  ) {
    deleteProfessionalInstitute(input: $input, condition: $condition) {
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
export const createMemberSpecialization = /* GraphQL */ `
  mutation CreateMemberSpecialization(
    $input: CreateMemberSpecializationInput!
    $condition: ModelMemberSpecializationConditionInput
  ) {
    createMemberSpecialization(input: $input, condition: $condition) {
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
export const updateMemberSpecialization = /* GraphQL */ `
  mutation UpdateMemberSpecialization(
    $input: UpdateMemberSpecializationInput!
    $condition: ModelMemberSpecializationConditionInput
  ) {
    updateMemberSpecialization(input: $input, condition: $condition) {
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
export const deleteMemberSpecialization = /* GraphQL */ `
  mutation DeleteMemberSpecialization(
    $input: DeleteMemberSpecializationInput!
    $condition: ModelMemberSpecializationConditionInput
  ) {
    deleteMemberSpecialization(input: $input, condition: $condition) {
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
export const createMemberPrevWorkPlace = /* GraphQL */ `
  mutation CreateMemberPrevWorkPlace(
    $input: CreateMemberPrevWorkPlaceInput!
    $condition: ModelMemberPrevWorkPlaceConditionInput
  ) {
    createMemberPrevWorkPlace(input: $input, condition: $condition) {
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
export const updateMemberPrevWorkPlace = /* GraphQL */ `
  mutation UpdateMemberPrevWorkPlace(
    $input: UpdateMemberPrevWorkPlaceInput!
    $condition: ModelMemberPrevWorkPlaceConditionInput
  ) {
    updateMemberPrevWorkPlace(input: $input, condition: $condition) {
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
export const deleteMemberPrevWorkPlace = /* GraphQL */ `
  mutation DeleteMemberPrevWorkPlace(
    $input: DeleteMemberPrevWorkPlaceInput!
    $condition: ModelMemberPrevWorkPlaceConditionInput
  ) {
    deleteMemberPrevWorkPlace(input: $input, condition: $condition) {
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
export const createMemberProfInstitute = /* GraphQL */ `
  mutation CreateMemberProfInstitute(
    $input: CreateMemberProfInstituteInput!
    $condition: ModelMemberProfInstituteConditionInput
  ) {
    createMemberProfInstitute(input: $input, condition: $condition) {
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
export const updateMemberProfInstitute = /* GraphQL */ `
  mutation UpdateMemberProfInstitute(
    $input: UpdateMemberProfInstituteInput!
    $condition: ModelMemberProfInstituteConditionInput
  ) {
    updateMemberProfInstitute(input: $input, condition: $condition) {
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
export const deleteMemberProfInstitute = /* GraphQL */ `
  mutation DeleteMemberProfInstitute(
    $input: DeleteMemberProfInstituteInput!
    $condition: ModelMemberProfInstituteConditionInput
  ) {
    deleteMemberProfInstitute(input: $input, condition: $condition) {
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

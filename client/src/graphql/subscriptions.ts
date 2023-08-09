/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
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
export const onCreateSpecialization = /* GraphQL */ `
  subscription OnCreateSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onCreateSpecialization(filter: $filter) {
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
export const onUpdateSpecialization = /* GraphQL */ `
  subscription OnUpdateSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onUpdateSpecialization(filter: $filter) {
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
export const onDeleteSpecialization = /* GraphQL */ `
  subscription OnDeleteSpecialization(
    $filter: ModelSubscriptionSpecializationFilterInput
  ) {
    onDeleteSpecialization(filter: $filter) {
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
export const onCreatePreviousWorkplace = /* GraphQL */ `
  subscription OnCreatePreviousWorkplace(
    $filter: ModelSubscriptionPreviousWorkplaceFilterInput
  ) {
    onCreatePreviousWorkplace(filter: $filter) {
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
export const onUpdatePreviousWorkplace = /* GraphQL */ `
  subscription OnUpdatePreviousWorkplace(
    $filter: ModelSubscriptionPreviousWorkplaceFilterInput
  ) {
    onUpdatePreviousWorkplace(filter: $filter) {
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
export const onDeletePreviousWorkplace = /* GraphQL */ `
  subscription OnDeletePreviousWorkplace(
    $filter: ModelSubscriptionPreviousWorkplaceFilterInput
  ) {
    onDeletePreviousWorkplace(filter: $filter) {
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
export const onCreateProfessionalInstitute = /* GraphQL */ `
  subscription OnCreateProfessionalInstitute(
    $filter: ModelSubscriptionProfessionalInstituteFilterInput
  ) {
    onCreateProfessionalInstitute(filter: $filter) {
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
export const onUpdateProfessionalInstitute = /* GraphQL */ `
  subscription OnUpdateProfessionalInstitute(
    $filter: ModelSubscriptionProfessionalInstituteFilterInput
  ) {
    onUpdateProfessionalInstitute(filter: $filter) {
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
export const onDeleteProfessionalInstitute = /* GraphQL */ `
  subscription OnDeleteProfessionalInstitute(
    $filter: ModelSubscriptionProfessionalInstituteFilterInput
  ) {
    onDeleteProfessionalInstitute(filter: $filter) {
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
export const onCreateMemberSpecialization = /* GraphQL */ `
  subscription OnCreateMemberSpecialization(
    $filter: ModelSubscriptionMemberSpecializationFilterInput
  ) {
    onCreateMemberSpecialization(filter: $filter) {
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
export const onUpdateMemberSpecialization = /* GraphQL */ `
  subscription OnUpdateMemberSpecialization(
    $filter: ModelSubscriptionMemberSpecializationFilterInput
  ) {
    onUpdateMemberSpecialization(filter: $filter) {
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
export const onDeleteMemberSpecialization = /* GraphQL */ `
  subscription OnDeleteMemberSpecialization(
    $filter: ModelSubscriptionMemberSpecializationFilterInput
  ) {
    onDeleteMemberSpecialization(filter: $filter) {
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
export const onCreateMemberPrevWorkPlace = /* GraphQL */ `
  subscription OnCreateMemberPrevWorkPlace(
    $filter: ModelSubscriptionMemberPrevWorkPlaceFilterInput
  ) {
    onCreateMemberPrevWorkPlace(filter: $filter) {
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
export const onUpdateMemberPrevWorkPlace = /* GraphQL */ `
  subscription OnUpdateMemberPrevWorkPlace(
    $filter: ModelSubscriptionMemberPrevWorkPlaceFilterInput
  ) {
    onUpdateMemberPrevWorkPlace(filter: $filter) {
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
export const onDeleteMemberPrevWorkPlace = /* GraphQL */ `
  subscription OnDeleteMemberPrevWorkPlace(
    $filter: ModelSubscriptionMemberPrevWorkPlaceFilterInput
  ) {
    onDeleteMemberPrevWorkPlace(filter: $filter) {
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
export const onCreateMemberProfInstitute = /* GraphQL */ `
  subscription OnCreateMemberProfInstitute(
    $filter: ModelSubscriptionMemberProfInstituteFilterInput
  ) {
    onCreateMemberProfInstitute(filter: $filter) {
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
export const onUpdateMemberProfInstitute = /* GraphQL */ `
  subscription OnUpdateMemberProfInstitute(
    $filter: ModelSubscriptionMemberProfInstituteFilterInput
  ) {
    onUpdateMemberProfInstitute(filter: $filter) {
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
export const onDeleteMemberProfInstitute = /* GraphQL */ `
  subscription OnDeleteMemberProfInstitute(
    $filter: ModelSubscriptionMemberProfInstituteFilterInput
  ) {
    onDeleteMemberProfInstitute(filter: $filter) {
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

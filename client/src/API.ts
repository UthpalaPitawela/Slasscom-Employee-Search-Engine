/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemberInput = {
  id?: string | null,
  nic: string,
  fullName: string,
  currentWorkplace: string,
  designation: string,
  profileSummary?: string | null,
  contactDetails?: ContactDetailsInput | null,
  previousWorkplaces?: Array< PreviousWorkplaceInput | null > | null,
};

export type ContactDetailsInput = {
  personal?: PersonalContactInput | null,
  official?: OfficialContactInput | null,
};

export type PersonalContactInput = {
  mobile?: string | null,
  email?: string | null,
};

export type OfficialContactInput = {
  mobile?: string | null,
  email?: string | null,
};

export type PreviousWorkplaceInput = {
  workplace?: string | null,
  designations?: Array< DesignationInput | null > | null,
};

export type DesignationInput = {
  designation?: string | null,
  from?: string | null,
  to?: string | null,
};

export type ModelMemberConditionInput = {
  nic?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  currentWorkplace?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  profileSummary?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  nic: string,
  fullName: string,
  currentWorkplace: string,
  designation: string,
  specialization?: ModelMemberSpecializationConnection | null,
  profileSummary?: string | null,
  contactDetails?: ContactDetails | null,
  previousWorkplaces?:  Array<PreviousWorkplace | null > | null,
  professionalInstitutes?: ModelMemberProfInstituteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMemberSpecializationConnection = {
  __typename: "ModelMemberSpecializationConnection",
  items:  Array<MemberSpecialization | null >,
  nextToken?: string | null,
};

export type MemberSpecialization = {
  __typename: "MemberSpecialization",
  id: string,
  memberId: string,
  specializationId: string,
  member: Member,
  specialization: Specialization,
  createdAt: string,
  updatedAt: string,
};

export type Specialization = {
  __typename: "Specialization",
  id: string,
  specialization?: string | null,
  member?: ModelMemberSpecializationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ContactDetails = {
  __typename: "ContactDetails",
  personal?: PersonalContact | null,
  official?: OfficialContact | null,
};

export type PersonalContact = {
  __typename: "PersonalContact",
  mobile?: string | null,
  email?: string | null,
};

export type OfficialContact = {
  __typename: "OfficialContact",
  mobile?: string | null,
  email?: string | null,
};

export type PreviousWorkplace = {
  __typename: "PreviousWorkplace",
  workplace?: string | null,
  designations?:  Array<Designation | null > | null,
};

export type Designation = {
  __typename: "Designation",
  designation?: string | null,
  from?: string | null,
  to?: string | null,
};

export type ModelMemberProfInstituteConnection = {
  __typename: "ModelMemberProfInstituteConnection",
  items:  Array<MemberProfInstitute | null >,
  nextToken?: string | null,
};

export type MemberProfInstitute = {
  __typename: "MemberProfInstitute",
  id: string,
  memberId: string,
  professionalInstituteId: string,
  member: Member,
  professionalInstitute: ProfessionalInstitute,
  createdAt: string,
  updatedAt: string,
};

export type ProfessionalInstitute = {
  __typename: "ProfessionalInstitute",
  id: string,
  title?: string | null,
  institute?: string | null,
  duration?: ProfessionalInstituteDuration | null,
  member?: ModelMemberProfInstituteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ProfessionalInstituteDuration = {
  __typename: "ProfessionalInstituteDuration",
  from?: string | null,
  to?: string | null,
};

export type UpdateMemberInput = {
  id: string,
  nic?: string | null,
  fullName?: string | null,
  currentWorkplace?: string | null,
  designation?: string | null,
  profileSummary?: string | null,
  contactDetails?: ContactDetailsInput | null,
  previousWorkplaces?: Array< PreviousWorkplaceInput | null > | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type CreateSpecializationInput = {
  id?: string | null,
  specialization?: string | null,
};

export type ModelSpecializationConditionInput = {
  specialization?: ModelStringInput | null,
  and?: Array< ModelSpecializationConditionInput | null > | null,
  or?: Array< ModelSpecializationConditionInput | null > | null,
  not?: ModelSpecializationConditionInput | null,
};

export type UpdateSpecializationInput = {
  id: string,
  specialization?: string | null,
};

export type DeleteSpecializationInput = {
  id: string,
};

export type CreateProfessionalInstituteInput = {
  id?: string | null,
  title?: string | null,
  institute?: string | null,
  duration?: ProfessionalInstituteDurationInput | null,
};

export type ProfessionalInstituteDurationInput = {
  from?: string | null,
  to?: string | null,
};

export type ModelProfessionalInstituteConditionInput = {
  title?: ModelStringInput | null,
  institute?: ModelStringInput | null,
  and?: Array< ModelProfessionalInstituteConditionInput | null > | null,
  or?: Array< ModelProfessionalInstituteConditionInput | null > | null,
  not?: ModelProfessionalInstituteConditionInput | null,
};

export type UpdateProfessionalInstituteInput = {
  id: string,
  title?: string | null,
  institute?: string | null,
  duration?: ProfessionalInstituteDurationInput | null,
};

export type DeleteProfessionalInstituteInput = {
  id: string,
};

export type CreateMemberSpecializationInput = {
  id?: string | null,
  memberId: string,
  specializationId: string,
};

export type ModelMemberSpecializationConditionInput = {
  memberId?: ModelIDInput | null,
  specializationId?: ModelIDInput | null,
  and?: Array< ModelMemberSpecializationConditionInput | null > | null,
  or?: Array< ModelMemberSpecializationConditionInput | null > | null,
  not?: ModelMemberSpecializationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMemberSpecializationInput = {
  id: string,
  memberId?: string | null,
  specializationId?: string | null,
};

export type DeleteMemberSpecializationInput = {
  id: string,
};

export type CreateMemberProfInstituteInput = {
  id?: string | null,
  memberId: string,
  professionalInstituteId: string,
};

export type ModelMemberProfInstituteConditionInput = {
  memberId?: ModelIDInput | null,
  professionalInstituteId?: ModelIDInput | null,
  and?: Array< ModelMemberProfInstituteConditionInput | null > | null,
  or?: Array< ModelMemberProfInstituteConditionInput | null > | null,
  not?: ModelMemberProfInstituteConditionInput | null,
};

export type UpdateMemberProfInstituteInput = {
  id: string,
  memberId?: string | null,
  professionalInstituteId?: string | null,
};

export type DeleteMemberProfInstituteInput = {
  id: string,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  nic?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  currentWorkplace?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  profileSummary?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member | null >,
  nextToken?: string | null,
};

export type ModelSpecializationFilterInput = {
  id?: ModelIDInput | null,
  specialization?: ModelStringInput | null,
  and?: Array< ModelSpecializationFilterInput | null > | null,
  or?: Array< ModelSpecializationFilterInput | null > | null,
  not?: ModelSpecializationFilterInput | null,
};

export type ModelSpecializationConnection = {
  __typename: "ModelSpecializationConnection",
  items:  Array<Specialization | null >,
  nextToken?: string | null,
};

export type ModelProfessionalInstituteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  institute?: ModelStringInput | null,
  and?: Array< ModelProfessionalInstituteFilterInput | null > | null,
  or?: Array< ModelProfessionalInstituteFilterInput | null > | null,
  not?: ModelProfessionalInstituteFilterInput | null,
};

export type ModelProfessionalInstituteConnection = {
  __typename: "ModelProfessionalInstituteConnection",
  items:  Array<ProfessionalInstitute | null >,
  nextToken?: string | null,
};

export type ModelMemberSpecializationFilterInput = {
  id?: ModelIDInput | null,
  memberId?: ModelIDInput | null,
  specializationId?: ModelIDInput | null,
  and?: Array< ModelMemberSpecializationFilterInput | null > | null,
  or?: Array< ModelMemberSpecializationFilterInput | null > | null,
  not?: ModelMemberSpecializationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMemberProfInstituteFilterInput = {
  id?: ModelIDInput | null,
  memberId?: ModelIDInput | null,
  professionalInstituteId?: ModelIDInput | null,
  and?: Array< ModelMemberProfInstituteFilterInput | null > | null,
  or?: Array< ModelMemberProfInstituteFilterInput | null > | null,
  not?: ModelMemberProfInstituteFilterInput | null,
};

export type ModelSubscriptionMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nic?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  currentWorkplace?: ModelSubscriptionStringInput | null,
  designation?: ModelSubscriptionStringInput | null,
  profileSummary?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSpecializationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
};

export type ModelSubscriptionProfessionalInstituteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  institute?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessionalInstituteFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessionalInstituteFilterInput | null > | null,
};

export type ModelSubscriptionMemberSpecializationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  memberId?: ModelSubscriptionIDInput | null,
  specializationId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMemberSpecializationFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberSpecializationFilterInput | null > | null,
};

export type ModelSubscriptionMemberProfInstituteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  memberId?: ModelSubscriptionIDInput | null,
  professionalInstituteId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMemberProfInstituteFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberProfInstituteFilterInput | null > | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpecializationMutationVariables = {
  input: CreateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type CreateSpecializationMutation = {
  createSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpecializationMutationVariables = {
  input: UpdateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type UpdateSpecializationMutation = {
  updateSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpecializationMutationVariables = {
  input: DeleteSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type DeleteSpecializationMutation = {
  deleteSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfessionalInstituteMutationVariables = {
  input: CreateProfessionalInstituteInput,
  condition?: ModelProfessionalInstituteConditionInput | null,
};

export type CreateProfessionalInstituteMutation = {
  createProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfessionalInstituteMutationVariables = {
  input: UpdateProfessionalInstituteInput,
  condition?: ModelProfessionalInstituteConditionInput | null,
};

export type UpdateProfessionalInstituteMutation = {
  updateProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfessionalInstituteMutationVariables = {
  input: DeleteProfessionalInstituteInput,
  condition?: ModelProfessionalInstituteConditionInput | null,
};

export type DeleteProfessionalInstituteMutation = {
  deleteProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberSpecializationMutationVariables = {
  input: CreateMemberSpecializationInput,
  condition?: ModelMemberSpecializationConditionInput | null,
};

export type CreateMemberSpecializationMutation = {
  createMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberSpecializationMutationVariables = {
  input: UpdateMemberSpecializationInput,
  condition?: ModelMemberSpecializationConditionInput | null,
};

export type UpdateMemberSpecializationMutation = {
  updateMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberSpecializationMutationVariables = {
  input: DeleteMemberSpecializationInput,
  condition?: ModelMemberSpecializationConditionInput | null,
};

export type DeleteMemberSpecializationMutation = {
  deleteMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberProfInstituteMutationVariables = {
  input: CreateMemberProfInstituteInput,
  condition?: ModelMemberProfInstituteConditionInput | null,
};

export type CreateMemberProfInstituteMutation = {
  createMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberProfInstituteMutationVariables = {
  input: UpdateMemberProfInstituteInput,
  condition?: ModelMemberProfInstituteConditionInput | null,
};

export type UpdateMemberProfInstituteMutation = {
  updateMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberProfInstituteMutationVariables = {
  input: DeleteMemberProfInstituteInput,
  condition?: ModelMemberProfInstituteConditionInput | null,
};

export type DeleteMemberProfInstituteMutation = {
  deleteMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpecializationQueryVariables = {
  id: string,
};

export type GetSpecializationQuery = {
  getSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpecializationsQueryVariables = {
  filter?: ModelSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecializationsQuery = {
  listSpecializations?:  {
    __typename: "ModelSpecializationConnection",
    items:  Array< {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfessionalInstituteQueryVariables = {
  id: string,
};

export type GetProfessionalInstituteQuery = {
  getProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfessionalInstitutesQueryVariables = {
  filter?: ModelProfessionalInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfessionalInstitutesQuery = {
  listProfessionalInstitutes?:  {
    __typename: "ModelProfessionalInstituteConnection",
    items:  Array< {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberSpecializationQueryVariables = {
  id: string,
};

export type GetMemberSpecializationQuery = {
  getMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMemberSpecializationsQueryVariables = {
  filter?: ModelMemberSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberSpecializationsQuery = {
  listMemberSpecializations?:  {
    __typename: "ModelMemberSpecializationConnection",
    items:  Array< {
      __typename: "MemberSpecialization",
      id: string,
      memberId: string,
      specializationId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      specialization:  {
        __typename: "Specialization",
        id: string,
        specialization?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberSpecializationsByMemberIdQueryVariables = {
  memberId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberSpecializationsByMemberIdQuery = {
  memberSpecializationsByMemberId?:  {
    __typename: "ModelMemberSpecializationConnection",
    items:  Array< {
      __typename: "MemberSpecialization",
      id: string,
      memberId: string,
      specializationId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      specialization:  {
        __typename: "Specialization",
        id: string,
        specialization?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberSpecializationsBySpecializationIdQueryVariables = {
  specializationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberSpecializationsBySpecializationIdQuery = {
  memberSpecializationsBySpecializationId?:  {
    __typename: "ModelMemberSpecializationConnection",
    items:  Array< {
      __typename: "MemberSpecialization",
      id: string,
      memberId: string,
      specializationId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      specialization:  {
        __typename: "Specialization",
        id: string,
        specialization?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberProfInstituteQueryVariables = {
  id: string,
};

export type GetMemberProfInstituteQuery = {
  getMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMemberProfInstitutesQueryVariables = {
  filter?: ModelMemberProfInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberProfInstitutesQuery = {
  listMemberProfInstitutes?:  {
    __typename: "ModelMemberProfInstituteConnection",
    items:  Array< {
      __typename: "MemberProfInstitute",
      id: string,
      memberId: string,
      professionalInstituteId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      professionalInstitute:  {
        __typename: "ProfessionalInstitute",
        id: string,
        title?: string | null,
        institute?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberProfInstitutesByMemberIdQueryVariables = {
  memberId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberProfInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberProfInstitutesByMemberIdQuery = {
  memberProfInstitutesByMemberId?:  {
    __typename: "ModelMemberProfInstituteConnection",
    items:  Array< {
      __typename: "MemberProfInstitute",
      id: string,
      memberId: string,
      professionalInstituteId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      professionalInstitute:  {
        __typename: "ProfessionalInstitute",
        id: string,
        title?: string | null,
        institute?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberProfInstitutesByProfessionalInstituteIdQueryVariables = {
  professionalInstituteId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberProfInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberProfInstitutesByProfessionalInstituteIdQuery = {
  memberProfInstitutesByProfessionalInstituteId?:  {
    __typename: "ModelMemberProfInstituteConnection",
    items:  Array< {
      __typename: "MemberProfInstitute",
      id: string,
      memberId: string,
      professionalInstituteId: string,
      member:  {
        __typename: "Member",
        id: string,
        nic: string,
        fullName: string,
        currentWorkplace: string,
        designation: string,
        profileSummary?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      professionalInstitute:  {
        __typename: "ProfessionalInstitute",
        id: string,
        title?: string | null,
        institute?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    nic: string,
    fullName: string,
    currentWorkplace: string,
    designation: string,
    specialization?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profileSummary?: string | null,
    contactDetails?:  {
      __typename: "ContactDetails",
      personal?:  {
        __typename: "PersonalContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
      official?:  {
        __typename: "OfficialContact",
        mobile?: string | null,
        email?: string | null,
      } | null,
    } | null,
    previousWorkplaces?:  Array< {
      __typename: "PreviousWorkplace",
      workplace?: string | null,
      designations?:  Array< {
        __typename: "Designation",
        designation?: string | null,
        from?: string | null,
        to?: string | null,
      } | null > | null,
    } | null > | null,
    professionalInstitutes?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnCreateSpecializationSubscription = {
  onCreateSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnUpdateSpecializationSubscription = {
  onUpdateSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnDeleteSpecializationSubscription = {
  onDeleteSpecialization?:  {
    __typename: "Specialization",
    id: string,
    specialization?: string | null,
    member?:  {
      __typename: "ModelMemberSpecializationConnection",
      items:  Array< {
        __typename: "MemberSpecialization",
        id: string,
        memberId: string,
        specializationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfessionalInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionalInstituteFilterInput | null,
};

export type OnCreateProfessionalInstituteSubscription = {
  onCreateProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfessionalInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionalInstituteFilterInput | null,
};

export type OnUpdateProfessionalInstituteSubscription = {
  onUpdateProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfessionalInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionalInstituteFilterInput | null,
};

export type OnDeleteProfessionalInstituteSubscription = {
  onDeleteProfessionalInstitute?:  {
    __typename: "ProfessionalInstitute",
    id: string,
    title?: string | null,
    institute?: string | null,
    duration?:  {
      __typename: "ProfessionalInstituteDuration",
      from?: string | null,
      to?: string | null,
    } | null,
    member?:  {
      __typename: "ModelMemberProfInstituteConnection",
      items:  Array< {
        __typename: "MemberProfInstitute",
        id: string,
        memberId: string,
        professionalInstituteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionMemberSpecializationFilterInput | null,
};

export type OnCreateMemberSpecializationSubscription = {
  onCreateMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionMemberSpecializationFilterInput | null,
};

export type OnUpdateMemberSpecializationSubscription = {
  onUpdateMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionMemberSpecializationFilterInput | null,
};

export type OnDeleteMemberSpecializationSubscription = {
  onDeleteMemberSpecialization?:  {
    __typename: "MemberSpecialization",
    id: string,
    memberId: string,
    specializationId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    specialization:  {
      __typename: "Specialization",
      id: string,
      specialization?: string | null,
      member?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberProfInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfInstituteFilterInput | null,
};

export type OnCreateMemberProfInstituteSubscription = {
  onCreateMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberProfInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfInstituteFilterInput | null,
};

export type OnUpdateMemberProfInstituteSubscription = {
  onUpdateMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberProfInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfInstituteFilterInput | null,
};

export type OnDeleteMemberProfInstituteSubscription = {
  onDeleteMemberProfInstitute?:  {
    __typename: "MemberProfInstitute",
    id: string,
    memberId: string,
    professionalInstituteId: string,
    member:  {
      __typename: "Member",
      id: string,
      nic: string,
      fullName: string,
      currentWorkplace: string,
      designation: string,
      specialization?:  {
        __typename: "ModelMemberSpecializationConnection",
        nextToken?: string | null,
      } | null,
      profileSummary?: string | null,
      contactDetails?:  {
        __typename: "ContactDetails",
      } | null,
      previousWorkplaces?:  Array< {
        __typename: "PreviousWorkplace",
        workplace?: string | null,
      } | null > | null,
      professionalInstitutes?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    professionalInstitute:  {
      __typename: "ProfessionalInstitute",
      id: string,
      title?: string | null,
      institute?: string | null,
      duration?:  {
        __typename: "ProfessionalInstituteDuration",
        from?: string | null,
        to?: string | null,
      } | null,
      member?:  {
        __typename: "ModelMemberProfInstituteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

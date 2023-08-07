/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemberInput = {
  id?: string | null,
  nic?: string | null,
  name?: string | null,
  personalEmail?: string | null,
  designation?: string | null,
  currentWorkplace?: string | null,
  specialization?: string | null,
  professionalInstitutes?: string | null,
};

export type ModelMemberConditionInput = {
  nic?: ModelStringInput | null,
  name?: ModelStringInput | null,
  personalEmail?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  currentWorkplace?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  professionalInstitutes?: ModelStringInput | null,
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
  nic?: string | null,
  name?: string | null,
  personalEmail?: string | null,
  designation?: string | null,
  currentWorkplace?: string | null,
  specialization?: string | null,
  professionalInstitutes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMemberInput = {
  id: string,
  nic?: string | null,
  name?: string | null,
  personalEmail?: string | null,
  designation?: string | null,
  currentWorkplace?: string | null,
  specialization?: string | null,
  professionalInstitutes?: string | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  nic?: ModelStringInput | null,
  name?: ModelStringInput | null,
  personalEmail?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  currentWorkplace?: ModelStringInput | null,
  specialization?: ModelStringInput | null,
  professionalInstitutes?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
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

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nic?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  personalEmail?: ModelSubscriptionStringInput | null,
  designation?: ModelSubscriptionStringInput | null,
  currentWorkplace?: ModelSubscriptionStringInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  professionalInstitutes?: ModelSubscriptionStringInput | null,
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

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
      nic?: string | null,
      name?: string | null,
      personalEmail?: string | null,
      designation?: string | null,
      currentWorkplace?: string | null,
      specialization?: string | null,
      professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
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
    nic?: string | null,
    name?: string | null,
    personalEmail?: string | null,
    designation?: string | null,
    currentWorkplace?: string | null,
    specialization?: string | null,
    professionalInstitutes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

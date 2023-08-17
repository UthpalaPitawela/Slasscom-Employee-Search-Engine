import * as queries from "../graphql/queries";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import {
  ListMembersQuery,
  ListProfessionalInstitutesQuery,
  ListSpecializationsQuery,
} from "../API";
import {
  getSpecializationVariableFormat,
  getInstitueVariableFormat,
  getDesignationSuggestionVariableFormat,
  getNameSuggestionVariableFormat,
  getSimpleVariableFormat,
  getCurrentWorkplaceSuggestionVariableFormat,
  getSpecializationSuggestionVariableFormat,
  getInstituteSuggestionVariableFormat,
} from "./queryVariables";
import { API, Amplify } from "aws-amplify";
import { getAwsConfig } from "../utils/getAwsConfig";

Amplify.configure(getAwsConfig());

export const simpleSearch = async (
  searchCriteria: string,
  suggestion: string
) => {
  const memberData: any = await API.graphql<GraphQLQuery<ListMembersQuery>>({
    query: queries.listMembers,
    variables: getSimpleVariableFormat(searchCriteria, suggestion),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return memberData.data.listMembers.items;
};

export const searchBySpecialization = async (suggestion: string) => {
  const memberData: any = await API.graphql<
    GraphQLQuery<ListSpecializationsQuery>
  >({
    query: queries.listSpecializations,
    variables: getSpecializationVariableFormat(suggestion),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return memberData.data.listSpecializations.items[0].member.items;
};

export const searchByInstitute = async (suggestion: string) => {
  const memberData: any = await API.graphql<
    GraphQLQuery<ListProfessionalInstitutesQuery>
  >({
    query: queries.listProfessionalInstitutes,
    variables: getInstitueVariableFormat(suggestion),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return memberData.data.listProfessionalInstitutes.items;
};

export const getDesignationSuggestions = async (searchQuery: string) => {
  const designationSuggestions: any = await API.graphql<
    GraphQLQuery<ListMembersQuery>
  >({
    query: queries.listDesignationSuggestions,
    variables: getDesignationSuggestionVariableFormat(searchQuery),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return designationSuggestions.data.listMembers.items;
};

export const getFullnameSuggestions = async (searchQuery: string) => {
  const fullNameSuggestions: any = await API.graphql<
    GraphQLQuery<ListMembersQuery>
  >({
    query: queries.listNameSuggestions,
    variables: getNameSuggestionVariableFormat(searchQuery),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return fullNameSuggestions.data.listMembers.items;
};

export const getCurrentWorkplaceSuggestions = async (searchQuery: string) => {
  const workplaceSuggestions: any = await API.graphql<
    GraphQLQuery<ListMembersQuery>
  >({
    query: queries.listCurrentWorkplaceSuggestions,
    variables: getCurrentWorkplaceSuggestionVariableFormat(searchQuery),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return workplaceSuggestions.data.listMembers.items;
};
export const getSpecializationSuggestions = async (searchQuery: string) => {
  const specializationSuggestions: any = await API.graphql<
    GraphQLQuery<ListMembersQuery>
  >({
    query: queries.listSpecializationSuggestions,
    variables: getSpecializationSuggestionVariableFormat(searchQuery),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return specializationSuggestions.data.listSpecializations.items;
};
export const getInstituteSuggestions = async (searchQuery: string) => {
  const instituteSuggestions: any = await API.graphql<
    GraphQLQuery<ListMembersQuery>
  >({
    query: queries.listProfessionalInstituteSuggestions,
    variables: getInstituteSuggestionVariableFormat(searchQuery),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return instituteSuggestions.data.listProfessionalInstitutes.items;
};

import * as queries from '../graphql/queries';
import { GraphQLQuery, GRAPHQL_AUTH_MODE  } from '@aws-amplify/api';
import { ListMembersQuery, ListSpecializationsQuery } from "../API";
import { getSimpleVariableFormat, getSpecializationVariableFormat } from './queryVariables';
// import { ListMembersQuery, ListMembersQueryVariables } from "../API";
// import { MemberData } from "../types/memberDataType";
import { API, Amplify} from "aws-amplify";
import { getAwsConfig } from "../utils/getAwsConfig";

Amplify.configure(getAwsConfig());

export const searchByMemberName = async (searchCriteria: string , searchQuery: string) => {
    const memberData: any = await API.graphql<GraphQLQuery<ListMembersQuery>>(
        { 
          query: queries.listMembers,
          variables: getSimpleVariableFormat(searchCriteria, searchQuery),
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        }
        );
    return memberData;
}
export const searchBySpecialization = async (searchCriteria: string, searchQuery: string) => {
    const memberData: any = await API.graphql<GraphQLQuery<ListSpecializationsQuery>>(
        { 
          query: queries.listSpecializations,
          variables: getSpecializationVariableFormat(searchCriteria,searchQuery),
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        }
        );
    return memberData;
}
import { GetMemberQueryVariables, ListMembersQueryVariables, ListProfessionalInstitutesQueryVariables, ListSpecializationsQueryVariables } from "../API";


//This simple variable format is used to filter by name, current workplace and designation
export const getSimpleVariableFormat = (searchCriteria: any , searchQuery: any) => {
    const variables: ListMembersQueryVariables = {
        filter: {
          [searchCriteria]: {
            contains: searchQuery 
          }
        }
    }
    return variables;
}
export const getSpecializationVariableFormat = (searchCriteria: string, searchQuery: any) => {
  console.log('searchCriteria', searchCriteria)
    const variables: ListSpecializationsQueryVariables = {
        filter: {
          [searchCriteria]: {
            contains: searchQuery 
          }
        }
    }
    return variables;
}
export const getInstitueVariableFormat = (searchCriteria: string, searchQuery: any) => {
  console.log('searchCriteria', searchCriteria)
    const variables: ListProfessionalInstitutesQueryVariables = {
        filter: {
          [searchCriteria]: {
            contains: searchQuery 
          }
        }
    }
    return variables;
}
export const getMemberByIdVariableFormat = (memberId: string) => {
    const variables: GetMemberQueryVariables = {
          id: memberId    
    }
    return variables;
}
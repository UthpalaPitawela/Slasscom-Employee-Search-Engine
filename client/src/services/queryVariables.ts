import {
  ListMembersQueryVariables,
  ListProfessionalInstitutesQueryVariables,
  ListSpecializationsQueryVariables,
} from "../API";

//This simple variable format is used to filter by name, current workplace and designation
export const getSimpleVariableFormat = (
  searchCriteria: any,
  suggestion: any
) => {
  const variables: ListMembersQueryVariables = {
    filter: {
      [searchCriteria]: {
        eq: suggestion,
      },
    },
  };
  return variables;
};
export const getSpecializationVariableFormat = (suggestion: any) => {
  const variables: ListSpecializationsQueryVariables = {
    filter: {
      specialization: {
        eq: suggestion,
      },
    },
  };
  return variables;
};
export const getInstitueVariableFormat = (suggestion: any) => {
  const variables: ListProfessionalInstitutesQueryVariables = {
    filter: {
      institute: {
        eq: suggestion,
      },
    },
  };
  return variables;
};

export const getDesignationSuggestionVariableFormat = (searchQuery: string) => {
  const variables: any = {
    filter: {
      designation: {
        contains: searchQuery,
      },
    },
  };
  return variables;
};
export const getNameSuggestionVariableFormat = (searchQuery: string) => {
  const variables: any = {
    filter: {
      fullName: {
        contains: searchQuery,
      },
    },
  };
  return variables;
};
export const getCurrentWorkplaceSuggestionVariableFormat = (
  searchQuery: string
) => {
  const variables: any = {
    filter: {
      currentWorkplace: {
        contains: searchQuery,
      },
    },
  };
  return variables;
};
export const getSpecializationSuggestionVariableFormat = (
  searchQuery: string
) => {
  const variables: any = {
    filter: {
      specialization: {
        contains: searchQuery,
      },
    },
  };
  return variables;
};
export const getInstituteSuggestionVariableFormat = (searchQuery: string) => {
  const variables: any = {
    filter: {
      institute: {
        contains: searchQuery,
      },
    },
  };
  return variables;
};

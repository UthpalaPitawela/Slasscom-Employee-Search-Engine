// userInputs.ts
import { gql } from '@apollo/client';

export const SEARCH_MEMBER_INPUT = gql`
  input SearchMemberInput {
    name: String
    email: String
    age: Int
    designation: String
    currentWorkplace: String
    specialization: String
    professionalInstitutes: String
  }
`;
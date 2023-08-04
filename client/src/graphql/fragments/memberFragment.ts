import { gql } from '@apollo/client';

export const SEARCH_MEMBER_FRAGMENT = gql`
  fragment MemberFragment on Member {
    id
    name
    designation
    currentWorkplace
    specialization
    professionalInstitutes
  }
`;

import { gql } from '@apollo/client';
import { SEARCH_MEMBER_FRAGMENT } from '../fragments/memberFragment';

export const SEARCH_MEMBER = gql`
  query SearchMember($input: SearchMemberInput!, $page: Int!, $pageSize: Int!) {
    searchMember(input: $input, page: $page, pageSize: $pageSize) {
      pageInfo {
        total
        totalPages
        currentPage
        hasNextPage
        hasPreviousPage
      }
      members {
        ...MemberFragment
      }
    }
  }
  ${SEARCH_MEMBER_FRAGMENT}
`;

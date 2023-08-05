import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type PageInfo {
    total: Int!
    totalPages: Int!
    currentPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  type Member {
    # Define your Member type fields here
    # Example: id: ID!
  }

  type Query {
    searchMember(input: SearchMemberInput!, page: Int!, pageSize: Int!): SearchResult!
  }

  input SearchMemberInput {
    name: String
    email: String
    age: Int
    designation: String
    currentWorkplace: String
    specialization: String
    professionalInstitutes: String
  }

  type SearchResult {
    pageInfo: PageInfo!
    members: [Member]!
  }
`;

module.exports = { typeDefs };

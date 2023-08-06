import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
import SearchCriteria from "../components/Search/SearchCriteria";
// import { listMembers} from '../graphql/queries'
import { getAwsConfig } from "../utils/getAwsConfig";


import { API, Amplify} from "aws-amplify";
import * as queries from '../graphql/queries';
import { GraphQLQuery, GRAPHQL_AUTH_MODE  } from '@aws-amplify/api';
import { ListMembersQuery, ListMembersQueryVariables } from "../API";


// import {Row} from 'react-bootstrap'
Amplify.configure(getAwsConfig());

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState("name")
  const [searchQuery, setSearchQuery] = useState("");
  const [members,setMembers] = useState();

  const handleSelectCriteria = (criteria: string) => {
    setSearchCriteria(criteria)
    console.log("searchCriteria",searchCriteria);

  }

  const handleInputChange = (searchTerm: string) => {
    setSearchQuery(searchTerm)
  }
  const variables: ListMembersQueryVariables = {
    filter: {
      name: {
        eq: "Nimal Perera"
      }
    },

  };

  const handleSearch = async () => {
    try {
      const memberData = await API.graphql<GraphQLQuery<ListMembersQuery>>(
        { 
          query: queries.listMembers,
          variables: variables,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        }
        );
        console.log('memberData', memberData)
      
      // const memberData: any= await API.graphql(graphqlOperation({listMembers}))
      // const members = memberData.data.listMembers.items;
      setMembers(members)

    }catch (err) { console.log('error fetching members', err) }
    
    // catch (err) {
    //   console.log('error fetching actors') }
    
  }

  return (
    <Container className="mt-5">
      <Row></Row>
      <Row>
        <Col md={2}></Col>
        <Col>
          <h1>Slasscom Employee Search</h1>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          {" "}
          <Container className="mt-5">
            <h4>Search By</h4>
          </Container>
        </Col>
        <Col md={10}>
          <Container className="mt-5">
            <Col sm={2}></Col>
            <Col sm={8}>
             <SearchCriteria handleSelectCriteria={handleSelectCriteria} searchCriteria={searchCriteria}/>
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={10}>
          <Container className="mt-4">
            <Col sm={3}></Col>
            <Col sm={8}>
              {" "}
              <SearchInput
                searchQuery={searchQuery}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
              />
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>

        <Col md={12}>
          <Container className="mt-4">
            <Col sm={12}>
              <SearchResultList members={members} />
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

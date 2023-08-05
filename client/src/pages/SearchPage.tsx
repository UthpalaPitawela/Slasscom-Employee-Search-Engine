import { useApolloClient} from '@apollo/client'; // Import useApolloClient

import { Container, Col, Row } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
import SearchCriteria from "../components/Search/SearchCriteria";
import { SEARCH_MEMBER } from '../graphql/queries/memberSearch';
import { useState } from "react";
// import {Row} from 'react-bootstrap'

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState("name")
  const [searchQuery, setSearchQuery] = useState("");
  const client = useApolloClient(); 

  const handleSelectCriteria = (criteria: string) => {
    setSearchCriteria(criteria)
    console.log("searchCriteria",searchCriteria);
    
  }

  const handleInputChange = (searchTerm: string) => {
    setSearchQuery(searchTerm)
  }



    const handleSearch = async () => {
      try {
        console.log("searchQuery",searchQuery);
        console.log("searchCriteria",searchCriteria);
        
        const searchInput = {
          [searchCriteria]: searchQuery
        }
        console.log('searchInput', searchInput)
        
        const { data } = await client.query({
          query: SEARCH_MEMBER,
          variables: { input: searchInput, page: 1, pageSize:10 },
        });
        console.log('Data:', data);
        // Do something with the data, e.g., update state or display results
      } catch (error) {
        console.error('Error:', error);
        // Handle errors gracefully
      }
    };


  // const { name, designation, currentWorkplace, specialization, professionalInstitutes } = data.searchMember;
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
                // onChange={(e: any) => setSearchQuery(e.target.value)}
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
              <SearchResultList />
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

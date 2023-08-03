import React, { useState } from "react";
import { Container, Col, Row, ButtonToolbar, Button } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
// import {Row} from 'react-bootstrap'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("name"); // Make the first button active initially

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    // setIsLoading(true);

    // Perform the search query here using an API or local data source
    // Example: const results = await searchAPI(searchQuery);

    // For this example, let's assume the results are fetched after a short delay
    setTimeout(() => {
      const results = ["Result 1", "Result 2", "Result 3"]; // Replace with actual search results
      setSearchResults(results);
      // setIsLoading(false);
    }, 1000);
  };

  const buttons = [
    { value: "name", text: "Name" },
    { value: "specialization", text: "Specialization" },
    { value: "designation", text: "Designation" },
    { value: "currentWorkplace", text: "Current Workplace" },
    { value: "institute", text: "Institute" },
  ];

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

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
              <ButtonToolbar className="justify-content-between">
                {buttons.map((button) => (
                  <Button
                    key={button.value}
                    variant={
                      activeButton === button.value ? "primary" : "secondary"
                    }
                    onClick={() => handleButtonClick(button.value)}
                  >
                    {button.text}
                  </Button>
                ))}
              </ButtonToolbar>{" "}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
              />
              {/* {isLoading ? (
                <p>Loading...</p>
              ) : (
                <SearchResultList results={searchResults} />
              )} */}
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>
        {/* <Col md={1}></Col> */}
        <Col md={12}>
          <Container className="mt-4">
            <Col sm={12}>
              <SearchResultList results={searchResults} />
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

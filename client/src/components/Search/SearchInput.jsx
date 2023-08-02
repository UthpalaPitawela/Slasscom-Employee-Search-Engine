import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Container className="mt-5">
    <Row>
      <Col lg={7}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="primary">
            Search
          </Button>
          
        </Form>
       
      </Col>
    </Row>
    <Col lg={7}>


    <Row>
          <Button variant="primary">
            Name
          </Button>
          <Button variant="primary">
            Designation
          </Button>


          </Row>
    </Col>
  </Container>
  );
};

export default SearchInput;

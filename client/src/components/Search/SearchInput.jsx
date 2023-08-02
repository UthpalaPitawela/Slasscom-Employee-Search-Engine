import React from "react";
import {
  Button,
  Col,
  // Container,
  Form,
  Row,
} from "react-bootstrap";

const SearchInput = () => {
 

  return (
    // <Container className="mt-5">
 
      <Row>
        <Col >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Col>
      </Row>
    

    // </Container>
  );
};

export default SearchInput;

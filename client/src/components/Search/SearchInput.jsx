import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Container className="mt-5">
    <Row>
      <Col lg={5}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button>
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default SearchInput;

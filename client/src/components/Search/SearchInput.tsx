import React from "react";
import {
  Button,
  Col,
  // Container,
  Form,
  Row,
} from "react-bootstrap";

const SearchInput = (props: any) => {
  return (
    // <Container className="mt-5">

    <Row>
      <Col>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=> props.handleInputChange(e.target.value)}
          />
          <Button variant="primary" onClick={()=> props.handleSearch()}>Search</Button>
        </Form>
      </Col>
    </Row>

    // </Container>
  );
};

export default SearchInput;

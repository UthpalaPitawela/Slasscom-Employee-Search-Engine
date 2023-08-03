import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Row, Col, Stack, Button } from "react-bootstrap";

const UserPage = () => {
  const navigate = useNavigate();
  const { data } = useParams();

  // Parse the string back to an object
  const parsedUserData = JSON.parse(decodeURIComponent(data));

  const redirectToSearch = () => {
    navigate("/search");
  };
  return (
    <Container className="mt-5">
      <Stack gap={3}>
        <Row>
          <Col md={3}>
            <Button onClick={() => redirectToSearch()}>Back to Search </Button>
          </Col>
          <Col>
            <h1>{parsedUserData.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <strong>Current Workplace</strong>
          </Col>
          <Col md={6}>{parsedUserData.workplace}</Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <strong>Designation</strong>
          </Col>
          <Col md={6}>{parsedUserData.designation}</Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <strong>Personal Email</strong>
          </Col>
          <Col md={6}>{parsedUserData.personalEmail}</Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <strong>Personal Contact Number</strong>
          </Col>
          <Col md={6}>{parsedUserData.personalContactNumber}</Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <strong>Official Email</strong>
          </Col>
          <Col md={6}>{parsedUserData.officialEmail}</Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default UserPage;

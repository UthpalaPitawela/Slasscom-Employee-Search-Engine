import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import UserField from "../components/User/UserField";

const UserPage = () => {
  const navigate = useNavigate();
  const { data } = useParams();
  // Parse the string back to an object
  const {name, ...memberData} = JSON.parse(decodeURIComponent(data));

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
            <h1>{name}</h1>
          </Col>
        </Row>       
        {Object.keys(memberData).map((key,k) =>{ return <UserField  resultItem={memberData[key]} resultLabel={key} key={k}/>})}
      </Stack>
    </Container>
  );
};

export default UserPage;

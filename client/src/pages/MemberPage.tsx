import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import MemberField from "../components/Member/MemberField";
import { MemberData } from "../types/memberDataType";

const MemberPage = () => {
  const navigate = useNavigate();
  const { memData } = useParams();

  const decodedMemData= memData? JSON.parse(decodeURIComponent(memData)): null;
  const {name, ...memberData} = decodedMemData || {};
  console.log("=================", memberData)
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
        {Object.keys(memberData).map((key,k) =>{ return <MemberField  resultItem={memberData[key]} resultLabel={key as keyof MemberData} key={k}/>})}
      </Stack>
    </Container>
  );
};

export default MemberPage;

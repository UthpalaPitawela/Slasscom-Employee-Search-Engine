import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import MemberField from "../components/Member/MemberField";
import { MemberData } from "../types/memberDataType";

const MemberPage = () => {
  const navigate = useNavigate();
  const { memData } = useParams();

  const decodedMemData= memData? JSON.parse(decodeURIComponent(memData)): null;
  const {fullName ,...memberData} = decodedMemData || {};
  console.log('memberData', memberData)
  const selectedMemFields = ['designation', 'nic', 'currentWorkplace', 'profileSummary'];
  const memberObjData = Object.assign({}, ...selectedMemFields.map((memKey: any) => ({ [memKey]: memberData[memKey] })));
  
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
            <h1>{fullName }</h1>
         
          </Col>
        </Row>       
        {Object.keys(memberObjData).map((key,k) =>{ return <MemberField  resultItem={memberData[key]} resultLabel={key as keyof MemberData} key={k}/>})}
      </Stack>
    </Container>
  );
};

export default MemberPage;

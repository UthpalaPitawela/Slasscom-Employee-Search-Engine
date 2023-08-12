import { Col, Row } from "react-bootstrap";
import { MemberPropType } from "../../types/propType";
import { MemberResultsTitles } from "../../types/memberDataType";

const MemberField = (props: MemberPropType) => {
  // const key = props.resultLabel as String;
    return (
        <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <strong>{MemberResultsTitles[props.resultLabel]}</strong>
        </Col>
        <Col md={6}>{props.resultItem}</Col>
      </Row>
    )

}


export default MemberField;
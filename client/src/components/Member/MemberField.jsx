import { SearchResultsTitles } from "../../schema/searchResultsTypes";
import { Col, Row } from "react-bootstrap";

const MemberField = ({resultItem,resultLabel}) => {
    return (
        <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <strong>{SearchResultsTitles[resultLabel]}</strong>
        </Col>
        <Col md={6}>{resultItem}</Col>
      </Row>
    )

}


export default MemberField;
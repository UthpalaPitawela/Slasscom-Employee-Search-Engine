import React from "react";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import { MemberData } from "../../types/memberDataType";

const SearchResultList = (props: any) => {
  console.log('props.searchResults', props.searchResults)
  const navigate = useNavigate();
  let  extractedMembers = props?.searchResults??[];
  if ((props.searchCriteria === 'specialization' || props.searchCriteria === 'institute') && 
  (extractedMembers.length > 0 && extractedMembers[0].member && 
    extractedMembers[0].member.items && extractedMembers[0].member.items.length)) {
     
     extractedMembers = extractedMembers[0].member.items.map((item: any )=> item.member);
  }

  const redirectMemberPage = (memberData: MemberData) => {
    const memData = JSON.stringify(memberData);
    navigate(`/member/${encodeURIComponent(memData)}`);
  };
  return (
    <Table striped bordered hover responsive>
      <thead>
        {props && props.searchResults && props.searchResults.length &&(
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Current Workplace</th>
            {/* <th>Specialization</th> */}
            <th>Profile Summary</th>
          </tr>
        )}
      </thead>
      <tbody>
        {
          extractedMembers.map((result: any, index: any) => (
            <tr key={index} onClick={() => redirectMemberPage(result)}>
              <td>{result?.fullName ?? ""}</td>
              <td>{result?.designation??""}</td>
              <td>{result?.currentWorkplace??""}</td>
              {/* <td>{result?.specialization??""}</td> */}
              <td>{result?.profileSummary??""}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default SearchResultList;

import React from "react";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import { MemberData } from "../../types/memberDataType";

const SearchResultList = (props: any) => {
  const navigate = useNavigate();
  let  extractedMembers = props?.searchResults??[];
  if ((props.searchCriteria === 'specialization') && 
  (extractedMembers.length > 0 && extractedMembers[0].member && 
    extractedMembers[0].member.items && extractedMembers[0].member.items.length)) {
     
     extractedMembers = extractedMembers[0].member.items.map((item: any )=> item.member);
  } else if (props.searchCriteria === 'institute') {
    extractedMembers =  extractedMembers.map((item: any) => item.member)
    console.log('extractedMembers    institute', extractedMembers)
  }

  const redirectMemberPage = (memberData: MemberData) => {
    const memData = JSON.stringify(memberData);
    navigate(`/member/${encodeURIComponent(memData)}`);
  };
  return (
    <>
    <Table striped bordered hover responsive>
      <thead>
        {props && props.searchResults && props.searchResults.length &&(
          <tr>
            <th>Name</th>
            <th>NIC Number</th>
            <th>Designation</th>
            <th>Current Workplace</th>
            <th>Profile Summary</th>
          </tr>
        )}
      </thead>
      <tbody>
        {
          extractedMembers.map((result: any, index: any) => (
            <tr key={index} onClick={() => redirectMemberPage(result)} style={{cursor: "pointer"}}>
              <td>{result?.fullName ?? ""}</td>
              <td>{result?.nic ?? ""}</td>
              <td>{result?.designation??""}</td>
              <td>{result?.currentWorkplace??""}</td>
              <td>{result?.profileSummary??""}</td>
            </tr>
          ))}
      </tbody>
    </Table>
    </>
  );
};

export default SearchResultList;

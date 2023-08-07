import React from "react";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import { MemberData } from "../../types/memberDataType";

const SearchResultList = (props: any) => {
  const navigate = useNavigate();

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
            <th>Personal Email</th>
            <th>Personal Contact Number</th>
            <th>Official Email</th>
            <th>Specialization</th>
          </tr>
        )}
      </thead>
      <tbody>
        {props &&
          props.searchResults &&
          props.searchResults.map((result: any, index: any) => (
            <tr key={index} onClick={() => redirectMemberPage(result)}>
              <td>{result.name}</td>
              <td>{result.designation}</td>
              <td>{result.currentWorkplace}</td>
              <td>{result.personalEmail}</td>
              <td>{result.personalContactNumber}</td>
              <td>{result.officialEmail}</td>
              <td>{result.specialization}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default SearchResultList;

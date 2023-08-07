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
        {props && props.members && (
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
          props.members &&
          props.members.map((member: any, index: any) => (
            <tr key={index} onClick={() => redirectMemberPage(member)}>
              <td>{member.name}</td>
              <td>{member.designation}</td>
              <td>{member.currentWorkplace}</td>
              <td>{member.personalEmail}</td>
              <td>{member.personalContactNumber}</td>
              <td>{member.officialEmail}</td>
              <td>{member.specialization}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default SearchResultList;

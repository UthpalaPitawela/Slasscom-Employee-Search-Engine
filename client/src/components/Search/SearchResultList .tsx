import React from "react";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import { MemberData } from "../../types/memberDataType";

const SearchResultList = () => {
  const navigate = useNavigate();

  const results = [
    {
      name: "Uthpala Isiru Pitawela",
      designation: "Senior Software Engineer",
      workplace: "99x",
      personalEmail: "uthpala@gamil.com",
      personalContactNumber: +942342341212,
      officialEmail: "uthpalap@99x.io",
    } ,
  ];

  const redirectMemberPage = (memberData: MemberData) => {
    const memData = JSON.stringify(memberData);
    navigate(`/member/${encodeURIComponent(memData)}`);
  };
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Current Workplace</th>
          <th>Personal Email</th>
          <th>Personal Contact Number</th>
          <th>Official Email</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} onClick={() => redirectMemberPage(result)}>
            <td>{result.name}</td>
            <td>{result.designation}</td>
            <td>{result.workplace}</td>
            <td>{result.personalEmail}</td>
            <td>{result.personalContactNumber}</td>
            <td>{result.officialEmail}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SearchResultList;

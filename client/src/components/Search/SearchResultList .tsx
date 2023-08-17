import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import { MemberData } from "../../types/memberDataType";
import { SearchCriteriaContants } from "../../constants/searchCriteria";

const ITEMS_PER_PAGE = 10; // Set the number of items per page

const SearchResultList = (props: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();
  let extractedMembers = props?.searchResults ?? [];
  if (
    props.searchCriteria === SearchCriteriaContants.SPECIALIZATION ||
    props.searchCriteria === SearchCriteriaContants.PROFESSIONAL_INSTITUTE
  ) {
    extractedMembers = props?.searchResults?.map((result: any) => result.member);
  }
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedMembers = extractedMembers?.slice(startIndex, endIndex);

  const redirectMemberPage = (memberData: MemberData) => {
    const memData = JSON.stringify(memberData);
    navigate(`/member/${encodeURIComponent(memData)}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const isNotFirstPage = currentPage !== 0;

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          {props && props.searchResults && props.searchResults.length>0 && (
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
          {paginatedMembers && paginatedMembers?.length>0 && paginatedMembers.map((result: any, index: any) => (
            <tr
              key={index}
              onClick={() => redirectMemberPage(result)}
              style={{ cursor: "pointer" }}
            >
              <td>{result?.fullName ?? ""}</td>
              <td>{result?.nic ?? ""}</td>
              <td>{result?.designation ?? ""}</td>
              <td>{result?.currentWorkplace ?? ""}</td>
              <td>{result?.profileSummary ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {extractedMembers?.length > ITEMS_PER_PAGE && (
        <ReactPaginate
          previousLabel={isNotFirstPage ? "Previous" : ""}
          nextLabel={"Next"}
          pageCount={Math.ceil(extractedMembers.length / ITEMS_PER_PAGE)}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default SearchResultList;

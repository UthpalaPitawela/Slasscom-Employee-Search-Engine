import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
import SearchCriteria from "../components/Search/SearchCriteria";
import { MemberData } from "../types/memberDataType";
import {
  searchBySpecialization,
  searchByInstitute,
  getFullnameSuggestions,
  getDesignationSuggestions,
  simpleSearch,
  getCurrentWorkplaceSuggestions,
  getSpecializationSuggestions,
  getInstituteSuggestions,
} from "../services/queries";
import { SearchCriteriaContants } from "../constants/searchCriteria";

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState("fullName");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState();
  const [searchResults, setSearchResults] = useState<MemberData[]>();
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const handleSelectCriteria = (criteria: string) => {
    setSelectedSuggestion("");
    setSearchResults([]);
    setSearchCriteria(criteria);
  };

  const handleInputChange = (data: any) => {
    setSelectedSuggestion(data[searchCriteria]);
  };

  const handleSearchSuggestions = (suggestions: any) => {
    const uniqueSuggestions = [
      ...new Set(suggestions.map((item: any) => item[searchCriteria])),
    ];
    const uniqueArray: any = uniqueSuggestions.map((value) => ({
      [searchCriteria]: value,
    }));
    setSuggestionList(uniqueArray);
  };

  const handleSearchRecommendations = async (query: string) => {
    setSearchQuery(query);
    switch (searchCriteria) {
      case SearchCriteriaContants.FULL_NAME: {
        const nameSuggestions = await getFullnameSuggestions(searchQuery);
        handleSearchSuggestions(nameSuggestions);
        break;
      }
      case SearchCriteriaContants.DESIGNATION: {
        const designationSuggestions = await getDesignationSuggestions(
          searchQuery
        );
        handleSearchSuggestions(designationSuggestions);
        break;
      }
      case SearchCriteriaContants.CURRENT_WORKPLACE: {
        const workplaceSuggestions = await getCurrentWorkplaceSuggestions(
          searchQuery
        );
        handleSearchSuggestions(workplaceSuggestions);
        break;
      }
      case SearchCriteriaContants.SPECIALIZATION: {
        const specializationSuggestions = await getSpecializationSuggestions(
          searchQuery
        );
        handleSearchSuggestions(specializationSuggestions);
        break;
      }
      case SearchCriteriaContants.PROFESSIONAL_INSTITUTE: {
        const instituteSuggestions = await getInstituteSuggestions(searchQuery);
        handleSearchSuggestions(instituteSuggestions);
        break;
      }
    }
  };

  const handleSearch = async () => {
    switch (searchCriteria) {
      case SearchCriteriaContants.FULL_NAME:
      case SearchCriteriaContants.DESIGNATION:
      case SearchCriteriaContants.CURRENT_WORKPLACE: {
        const results = await simpleSearch(searchCriteria, selectedSuggestion);
        setSearchResults(results);
        break;
      }
      case SearchCriteriaContants.SPECIALIZATION: {
        const specializationResults = await searchBySpecialization(
          selectedSuggestion
        );
        setSearchResults(specializationResults);
        break;
      }
      case SearchCriteriaContants.PROFESSIONAL_INSTITUTE: {
        const instituteResults = await searchByInstitute(selectedSuggestion);
        setSearchResults(instituteResults);
        break;
      }
    }
  };

  return (
    <Container className="mt-5">
      <Row></Row>
      <Row>
        <Col md={2}></Col>
        <Col>
          <h1>SLASSCOM Employee Search</h1>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          {" "}
          <Container className="mt-5">
            <h4>Search By</h4>
          </Container>
        </Col>
        <Col md={10}>
          <Container className="mt-5">
            <Col sm={2}></Col>
            <Col sm={8}>
              <SearchCriteria
                handleSelectCriteria={handleSelectCriteria}
                searchCriteria={searchCriteria}
              />
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={10}>
          <Container className="mt-4">
            <Col sm={3}></Col>
            <Col sm={9}>
              {" "}
              <SearchInput
                handleInputChange={handleInputChange}
                suggestionList={suggestionList}
                handleSearchRecommendations={handleSearchRecommendations}
                searchCriteria={searchCriteria}
                handleSearch={handleSearch}
                viewLoader={selectedSuggestion && !searchResults}
              />
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Container className="mt-4">
            <Col sm={12}>
              <SearchResultList
                searchResults={searchResults}
                searchCriteria={searchCriteria}
              />
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

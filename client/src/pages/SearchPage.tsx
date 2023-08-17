import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
import SearchCriteria from "../components/Search/SearchCriteria";
import { MemberData } from "../types/memberDataType";
import { searchByMemberName,searchBySpecialization , searchByInstitute} from "../services/queries";

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState("fullName")
  const [searchQuery, setSearchQuery] = useState("");
  const [members,setMembers] = useState([]);
  const [suggestionList,setSuggestionList] = useState();
  const [searchResults, setSearchResults] = useState<MemberData[]>();
  const [selectedSuggestion, setSelectedSuggestion] = useState('')

  const handleSelectCriteria = (criteria: string) => {
    setSearchCriteria(criteria)

  }

  const handleInputChange =  (data: any) => { 
    setSelectedSuggestion(data[searchCriteria]);    
  }
  
  const filterSearchResultsForSuggestionSelection = () => {
    if (selectedSuggestion) {
      const results:any=  members?.filter((member: any) =>  {return member[searchCriteria] === selectedSuggestion})
      console.log('results', results)
      setSearchResults(results);
    }     
  }

  const handleSearchBySearchCriteria = (searchCriteria: string, searchQuery: string) => {
    switch (searchCriteria) {
      case "fullName":
      case "designation":
      case "currentWorkplace":
        return searchByMemberName(searchCriteria, searchQuery)
        break;
      case "specialization":
        return searchBySpecialization(searchCriteria,searchQuery)
        break;
      case "institute":
        return searchByInstitute(searchCriteria,searchQuery)
        break;
      default:
        console.log("Invalid choice.");
        break;
    }
  }

  const handleSearchSuggestions  = (memberData: any) => {
    console.log('memberData', memberData)
      setMembers(memberData);
      const uniqueSuggestions = [...new Set(memberData.map((item: any) => item[searchCriteria]))];
      const uniqueArray: any = uniqueSuggestions.map(value  => ({ [searchCriteria]: value  }));
      setSuggestionList(uniqueArray)
  }

   const handleSimpleSearch= async () => {
     try {
      const memberData: any = await handleSearchBySearchCriteria(searchCriteria, searchQuery)
      const memData:any= memberData?.data?.listMembers?.items;
      handleSearchSuggestions(memData);     
     } catch(error: any) {
      console.log('error fetching members', error)
     }
   }

   const handleSearchBySpecialization = async () => {
    try {
     const memberData: any = await handleSearchBySearchCriteria(searchCriteria, searchQuery)
     const memData:any= memberData?.data?.listSpecializations?.items;
     handleSearchSuggestions(memData);
    } catch(error: any) {
      console.log('error fetching members', error)
    }
  }



  const handleSearchByInstitute = async() => {
    try {
      const memberData: any = await handleSearchBySearchCriteria(searchCriteria, searchQuery)
      const memData:any= memberData?.data?.listProfessionalInstitutes?.items;
      handleSearchSuggestions(memData);
     } catch(error: any) {
       console.log('error fetching members', error)
     }
  }


  const handleSearchForSugggestions = async (query: string) => {
    setSearchQuery(query)
    if (searchCriteria === 'fullName' || searchCriteria === 'designation' || searchCriteria === 'currentWorkplace') {
      handleSimpleSearch();
    } else if (searchCriteria === 'specialization') {
      handleSearchBySpecialization();
    } else if (searchCriteria === 'institute') {
      handleSearchByInstitute();
    }
  }

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
             searchCriteria={searchCriteria}/>
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
                handleSearchForSugggestions={handleSearchForSugggestions}
                searchCriteria={searchCriteria}
                filterSearchResultsForSuggestionSelection={filterSearchResultsForSuggestionSelection}
              />
            </Col>
          </Container>
        </Col>
      </Row>
      <Row>

        <Col md={12}>
          <Container className="mt-4">
            <Col sm={12}>
              <SearchResultList searchResults={searchResults} searchCriteria={searchCriteria} />
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

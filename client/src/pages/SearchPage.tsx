import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchInput from "../components/Search/SearchInput";
import SearchResultList from "../components/Search/SearchResultList ";
import SearchCriteria from "../components/Search/SearchCriteria";
// import { listMembers} from '../graphql/queries'


// import { ListMembersQuery, ListMembersQueryVariables } from "../API";
import { MemberData } from "../types/memberDataType";
import { searchByMemberName,searchBySpecialization } from "../services/queries";


// import {Row} from 'react-bootstrap'
// Amplify.configure(getAwsConfig());

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
  
  const handleSearch = () => {
    if (selectedSuggestion) {
      console.log('selectedSuggestion', selectedSuggestion)
      console.log('members', members)
      const results:any=  members?.filter((member: any) =>  {return member[searchCriteria] === selectedSuggestion})
      console.log('results', results)
      setSearchResults(results);

    }
      
  }

  const handleMemberFilter = (searchCriteria: string, searchQuery: string) => {
    switch (searchCriteria) {
      case "fullName":
      case "designation":
      case "currentWorkplace":
          return searchByMemberName(searchCriteria, searchQuery)
          break;
      case "specialization":
          return searchBySpecialization(searchCriteria,searchQuery)
      default:
          console.log("Invalid choice.");
          break;
    }
  }


   const handleSimpleSearch= async () => {
     try {
      const memberData: any = await handleMemberFilter(searchCriteria, searchQuery)
      console.log('memberData', memberData)
      const memData:any= memberData?.data?.listMembers?.items;
      console.log('memData', memData)
      setMembers(memData);
      const uniqueSuggestions = [...new Set(memData.map((item: any) => item[searchCriteria]))];
      const uniqueArray: any = uniqueSuggestions.map(value  => ({ [searchCriteria]: value  }));
      setSuggestionList(uniqueArray)
     } catch(error: any) {
      console.log('error fetching members', error)

     }
   }

   const handleSearchBySpecialization = async () => {
    try {
     const memberData: any = await handleMemberFilter(searchCriteria, searchQuery)
     const memData:any= memberData?.data?.listSpecializations?.items;
     setMembers(memData);
     const uniqueSuggestions = [...new Set(memData.map((item: any) => item[searchCriteria]))];
     const uniqueArray: any = uniqueSuggestions.map(value  => ({ [searchCriteria]: value  }));
     setSuggestionList(uniqueArray)
    } catch(error: any) {
      console.log('error fetching members', error)
    }
  }


  const filterSearch = async (query: string) => {
    setSearchQuery(query)
    if (searchCriteria === 'fullName' || searchCriteria === 'designation' || searchCriteria === 'currentWorkplace') {
      handleSimpleSearch();
    } else if (searchCriteria === 'specialization') {
      handleSearchBySpecialization();
    }
    // try {
    //   const memberData: any = await handleMemberFilter(searchCriteria, searchQuery)
    //     console.log('memberData', memberData)
    //     const filteredMemberData = getMemberDataFromSearchResults(memberData, searchCriteria);
    //   // if (memberData && memberData.data && memberData.data.listMembers && memberData.data.listMembers.items) {
    //   //   // const memData:any= memberData?.data?.listMembers?.items;
    //   setMembers(filteredMemberData);
    //   const uniqueSuggestions = [...new Set(filteredMemberData.map((item: any) => item[searchCriteria]))];
    //   console.log('uniqueSuggestions', uniqueSuggestions)
    //   const uniqueArray: any = uniqueSuggestions.map(value  => ({ [searchCriteria]: value  }));
    //   console.log('uniqueArray', uniqueArray)
    //   setSuggestionList(uniqueArray)

    //   // }
    // }catch (err) { console.log('error fetching members', err) }
  }

  return (
    <Container className="mt-5">
      <Row></Row>
      <Row>
        <Col md={2}></Col>
        <Col>
          <h1>Slasscom Employee Search</h1>
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
                filterSearch={filterSearch}
                searchCriteria={searchCriteria}
                handleSearch={handleSearch}
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

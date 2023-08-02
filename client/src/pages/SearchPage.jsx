import React, { useState } from 'react';
import SearchInput from '../components/Search/SearchInput';
import SearchResultList from '../components/Search/SearchResultList ';
import {Container} from 'react-bootstrap';
// import {Row} from 'react-bootstrap'


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      return;
    }

    setIsLoading(true);

    // Perform the search query here using an API or local data source
    // Example: const results = await searchAPI(searchQuery);

    // For this example, let's assume the results are fetched after a short delay
    setTimeout(() => {
      const results = ['Result 1', 'Result 2', 'Result 3']; // Replace with actual search results
      setSearchResults(results);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container fluid>
         {/* <Row> */}

        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        {isLoading ? <p>Loading...</p> : <SearchResultList results={searchResults} />}
        {/* </Row> */}
       </Container> 
  );
};

export default SearchPage;

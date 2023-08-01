import React from 'react';

const SearchResultList = ({ results }) => {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  );
};

export default SearchResultList;

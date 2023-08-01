import React from 'react';

const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchInput;

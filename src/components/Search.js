import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <h3>Search</h3>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </>
  );
};

export default Search;
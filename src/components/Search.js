import React from 'react';

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className='container'>
      <h3>Search</h3>
      <input type="text" placeholder="Search..." onChange={handleSearch} class="form-control"/>
    </div>
  );
};

export default Search;
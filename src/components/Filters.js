import React from 'react';

const Filters = ({ onFilter }) => {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <>
      <h3>Filters</h3>
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="cheap">Cheap</option>
        <option value="moderate">Moderate</option>
        <option value="expensive">Expensive</option>
      </select>
    </>
  );
};

export default Filters;
import React from "react";

const SelectSection = () => {
  return (
    <div>
      <label htmlFor="cars">Choose a section:</label>
      <select name="cars" id="cars">
        <option value="Main">Main</option>
        <option value="About">About</option>
        <option value="Products">Products</option>
        <option value="Catalog">Catalog</option>
        <option value="About">About</option>
        <option value="Contact">Contact</option>
      </select>
      <br />
    </div>
  );
};

export default SelectSection;

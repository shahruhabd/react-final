import React, { useState } from 'react';

const ControlledForm = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: Date.now(), text: inputValue });
    setInputValue('');
  };

  return (
    <>
      <h3>Controlled Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default ControlledForm;
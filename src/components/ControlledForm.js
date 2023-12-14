import React, { useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Form Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Controlled Form</h3>
      <label>
        Enter text:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
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
    <div className='container'>
      <h3>Controlled Form</h3>
      <form onSubmit={handleSubmit} class="form-control">
        <label class="form-control">
          Enter text:
          <input type="text" value={inputValue} onChange={handleChange} class="form-control"/>
        </label>
        <button type="submit" class="form-control">Add Item</button>
      </form>
    </div>
  );
};

export default ControlledForm;
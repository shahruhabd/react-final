import React, { useRef } from 'react';

const UncontrolledForm = ({ onAddItem }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: Date.now(), text: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <div className='container'>
      <h3>Uncontrolled Form</h3>
      <form onSubmit={handleSubmit} class="form-control">
        <label class="form-control">
          Enter text:
          <input type="text" ref={inputRef} class="form-control"/>
        </label>
        <button type="submit" class="form-control">Add Item</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
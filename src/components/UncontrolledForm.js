import React, { useRef } from 'react';

const UncontrolledForm = ({ onAddItem }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: Date.now(), text: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <>
      <h3>Uncontrolled Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Form Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Form</h3>
      <label>
        Enter text:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
import React from "react";

const InputField = ({ label, type, value, onChange, onKeyDown }) => {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} onKeyDown={onKeyDown} class="form-control"/>
    </label>
  );
};

export default InputField;
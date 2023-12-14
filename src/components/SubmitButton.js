import React from "react";

const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Добавить товар
    </button>
  );
};

export default SubmitButton;
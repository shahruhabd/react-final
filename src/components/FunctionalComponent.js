import React from 'react';

const FunctionalComponent = (props) => {
  return (
    <div>
      <h3>Functional Component</h3>
      <p>Received prop: {props.message}</p>
    </div>
  );
};

export default FunctionalComponent;
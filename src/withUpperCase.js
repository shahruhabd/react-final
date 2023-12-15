import React from 'react';

const withUpperCase = (WrappedComponent) => {
  return (props) => {
    const upperCaseProp = props.someProp.toUpperCase();
    return <WrappedComponent {...props} someProp={upperCaseProp} />;
  };
};

export default withUpperCase;

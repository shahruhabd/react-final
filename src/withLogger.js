import React from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Logger - Component props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;

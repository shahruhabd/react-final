import React from 'react';
import withLogger from '../withLogger';

const MyComponent = (props) => {
  return (
    <div>
      <h2>My Component</h2>
    </div>
  );
};

export default withLogger(MyComponent);

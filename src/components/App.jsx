import React from 'react';

export default (props) => {
  const { children } = props;
  return (
    <>
      <h1>App Component</h1>
      {children}
    </>
  );
};
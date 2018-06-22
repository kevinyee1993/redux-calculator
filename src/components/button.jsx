import React, { Component } from 'react';

const Button = ({ value, selectNumber }) => {
  return(
    <div className="button" onClick={ () => selectNumber(value) }>
      { value }
    </div>
  );
};

export default Button;

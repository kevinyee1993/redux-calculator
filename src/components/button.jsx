import React, { Component } from 'react';

const Button = ({ value, selectNumber, currentNumber }) => {
  return(
    <div className="button" onClick={ () => selectNumber(currentNumber.concat(value)) }>
      { value }
    </div>
  );
};

export default Button;

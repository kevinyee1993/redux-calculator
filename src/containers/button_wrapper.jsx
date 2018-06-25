import React, { Component } from 'react';
import NumberButton from './number_button_container';
import OperationButton from './operation_button_container';

export default class ButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  createNumberButtons() {
    const numbers = [0,1,2,3,4,5,6,7,8,9];

    return numbers.map( number => <NumberButton key={ number } value={ number }/> );

  }

  createOperationButtons() {
    const operations = ['+', '-', '/', '*'];

    return operations.map( operation => <OperationButton key={ operation }value={ operation }/> );
  }

  render() {

    const numberButtons = this.createNumberButtons();
    const operationButtons = this.createOperationButtons();

    return(
      <div className="button-wrapper">
        This is button wrapper
        <div className="number-buttons-container">
          { numberButtons }
        </div>

        <div className="operation-buttons-container">
          { operationButtons }
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import NumberButton from './number_button_container';
import OperationButton from '../components/operation_button';

export default class ButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  createNumberButtons() {
    const numbers = [0,1,2,3,4,5,6,7,8,9];

    return numbers.map( number => <NumberButton value={ number }/> );

  }

  render() {

    const numberButtons = this.createNumberButtons();

    return(
      <div className="button-wrapper">
        This is button wrapper
        { numberButtons }
        <OperationButton />
      </div>
    );
  }
}

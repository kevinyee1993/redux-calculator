import React, { Component } from 'react';
import NumberButton from './number_button_container';
import OperationButton from '../components/operation_button';

export default class ButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="button-wrapper">
        This is button wrapper
        <NumberButton />
        <OperationButton />
      </div>
    );
  }
}

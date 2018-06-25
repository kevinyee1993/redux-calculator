import React, { Component } from 'react';
import NumberButtonWrapper from '../containers/number_button_wrapper';
import OperationButtonWrapper from '../containers/operation_button_wrapper';
import Display from './display';


export default class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <OperationButtonWrapper />
        <NumberButtonWrapper />
      </div>
    );
  }
}

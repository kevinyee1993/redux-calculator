import React, { Component } from 'react';
import NumberButtonWrapper from '../containers/number_button_wrapper';
import Display from './display';


export default class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <NumberButtonWrapper />
      </div>
    );
  }
}

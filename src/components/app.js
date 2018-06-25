import React, { Component } from 'react';
import ButtonWrapper from '../containers/button_wrapper';
import Display from './display';


export default class App extends Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonWrapper />
      </div>
    );
  }
}

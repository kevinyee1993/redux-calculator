import React, { Component } from 'react';
import ButtonWrapper from '../containers/button_wrapper';
import Display from './display';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Don't have to get it perfect just have to get it done</h1>
        <Display />
        <ButtonWrapper />
      </div>
    );
  }
}

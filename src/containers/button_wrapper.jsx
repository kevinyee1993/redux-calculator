import React, { Component } from 'react';
import Button from '../components/button';

export default class ButtonWrapper extends Component {
  render() {
    return(
      <div className="button-wrapper">
        <Button value="1"/>
        <Button value="2"/>
        <Button value="3"/>
      </div>
    );
  }
}

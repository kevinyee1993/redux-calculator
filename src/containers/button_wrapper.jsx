import React, { Component } from 'react';
import Button from '../components/button';

export default class ButtonWrapper extends Component {
  render() {
    return(
      <div className="button-wrapper">
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

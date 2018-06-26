import React, { Component } from 'react';

export default class OperationButton extends Component {


  render() {
    let toggleClass;

    if(this.props.operation === this.props.value) {
      toggleClass = 'selected-button';
    } else {
      toggleClass = 'button';
    }

    return(
      <div className={ toggleClass }
        onClick={ () => this.props.selectOperation(this.props.value,
        this.props.previousNumber,
        this.props.currentNumber) }>
        
        { this.props.value }
        { this.props.currentNumber }
      </div>
    );
  }
}

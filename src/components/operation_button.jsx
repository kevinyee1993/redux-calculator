import React, { Component } from 'react';

export default class OperationButton extends Component {

  switcheroo(currentNumber, previousNumber) {

  }

  render() {
    let toggleClass;

    if(this.props.operation === this.props.value) {
      toggleClass = 'selected-button';
    } else {
      toggleClass = 'button';
    }

    return(
      <div className={ toggleClass }
        onClick={ () => this.props.selectOperation(this.props.value, "5", "10") }>

        { this.props.value }
      </div>
    );
  }
}

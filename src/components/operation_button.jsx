import React, { Component } from 'react';

export default class OperationButton extends Component {

  constructor(props) {
    super(props);

    // thinking about using this to keep track of the numbers
    this.state = { currentNumber: "", previousNumber: "" };
  }

  // will return the new current number
  calculate(previousNumber, currentNumber, operation) {
    // use switch statements here for different operations, no operation
    // or one number is empty means just return currentNumber

    let prevToInt = parseInt(previousNumber);
    let currToInt = parseInt(currentNumber);

    console.log(prevToInt);
    console.log(currToInt);

    if(prevToInt) {
      return (prevToInt + currToInt).toString();
    } else {
      return currToInt.toString();
    }
  }

  // need to somehow update prevNum to currNum after operation button is pressed


  render() {
    let toggleClass;
    let updatedValue;

    if(this.props.operation === this.props.value) {
      toggleClass = 'selected-button';
    } else {
      toggleClass = 'button';
    }

    updatedValue = this.calculate(this.props.previouNumber,
      this.props.currentNumber,
      this.props.operation);

    return(
      <div className={ toggleClass }
        onClick={ () => this.props.selectOperation(this.props.value, updatedValue, "10") }>

        { this.props.value }
      </div>
    );
  }
}

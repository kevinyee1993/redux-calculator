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
    let answer;

    if(prevToInt) {
      switch(operation) {
        case '+':
          answer = (prevToInt + currToInt).toString();
          break;
        case '-':
          answer = (prevToInt - currToInt).toString();
          break;
        case '/':
          answer = (prevToInt / currToInt).toString();
          break;
        case '*':
          answer = (prevToInt * currToInt).toString();
          break;
      }
    } else {
      // console.log(prevToInt + currToInt);
      return currToInt.toString();
    }

    return answer;
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

    updatedValue = this.calculate(this.props.previousNumber,
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

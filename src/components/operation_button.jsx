import React, { Component } from 'react';

export default class OperationButton extends Component {

  constructor(props) {
    super(props);

    // thinking about using this to keep track of the numbers
    this.state = { operation: "" };
  }

  // will return the new current number
  calculate(previousNumber, currentNumber, operation) {
    // use switch statements here for different operations, no operation
    // or one number is empty means just return currentNumber

    let prevToInt;

    console.log("operation:" + operation);
    console.log("prev:" + previousNumber);
    console.log("curr:" + currentNumber);


    if(parseInt(previousNumber)) {
      prevToInt = parseInt(previousNumber);
    } else {
      // prevToInt = 0;
      return [currentNumber, "0"];
    }



    let currToInt = parseInt(currentNumber);
    let answer;


    // KIND OF WORKING ON WHAT TO DO WITH SET STATE


    // if(prevToInt) {
      switch(operation) {
        case '+':
          answer = (prevToInt + currToInt).toString();
          this.setState({ operation: "+" });
          break;
        case '-':
          answer = (prevToInt - currToInt).toString();
          this.setState({ operation: "-" });
          break;
        case '/':
          answer = (prevToInt / currToInt).toString();
          this.setState({ operation: "/" });
          break;
        case '*':
          answer = (prevToInt * currToInt).toString();
          this.setState({ operation: "*" });
          break;
        case '=':
          this.setState({ operation: "" });
          break;
      }
    // } else {
    //   // console.log(prevToInt + currToInt);
    //   return currToInt.toString();
    // }

    return ["0", answer];
  }

  // need to somehow update prevNum to currNum after operation button is pressed


  render() {
    let toggleClass;
    let updatedCurrValue;
    let updatedPrevValue;

    if(this.props.operation === this.props.value) {
      toggleClass = 'selected-button';
    } else {
      toggleClass = 'button';
    }

    // console.log("previous number:" + this.props.previousNumber);
    // console.log("current number:" + this.props.currentNumber);

    [updatedPrevValue, updatedCurrValue] = this.calculate(this.props.previousNumber,
      this.props.currentNumber,
      this.props.value);

    return(
      <div className={ toggleClass }
        onClick={ () => this.props.selectOperation(this.props.value, updatedCurrValue, updatedPrevValue) }>

        { this.props.value }
      </div>
    );
  }
}

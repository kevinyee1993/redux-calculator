import React, { Component } from 'react';

export default class NumberButton extends Component {
  render() {
    return (
      <div className="button" onClick={ () =>
        {
          let inputNum = "";

          if(this.props.currentNumber[0] == '0') {
            inputNum = this.props.currentNumber.slice(1).concat(this.props.value);
          } else {
            inputNum = this.props.currentNumber.concat(this.props.value);
          }
          // this.props.selectNum(this.props.currentNumber.concat(this.props.value));

          this.props.selectNum(inputNum);
        } }>
        { this.props.value }
      </div>
    );
  }
}

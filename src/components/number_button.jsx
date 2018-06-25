import React, { Component } from 'react';

export default class NumberButton extends Component {
  render() {
    return (
      <div className="button" onClick={ () => this.props.selectNum(this.props.value) }>
        { this.props.value }
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class OperationButton extends Component {
  render() {

    return(
      <div className="button">
        { this.props.value }
      </div>
    );
  }
}

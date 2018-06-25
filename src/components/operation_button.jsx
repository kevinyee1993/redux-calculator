import React, { Component } from 'react';

export default class OperationButton extends Component {
  render() {

    return(
      <div className="button" onClick={ () => this.props.selectOperation(this.props.value) }>
        { this.props.value }
      </div>
    );
  }
}

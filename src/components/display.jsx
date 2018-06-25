import React, { Component } from 'react';
import { connect } from 'react-redux';


class Display extends Component {
  render() {
    return(
      <div className="display">
        { console.log(this.props.numbers.currentNumber) }
        { this.props.numbers.currentNumber }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numbers: state.numbers
  };
};

export default connect(mapStateToProps)(Display);

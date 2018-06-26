import React, { Component } from 'react';
import { connect } from 'react-redux';


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { totalNumber: 0 };
  }

  // { this.props.numbers.currentNumber }

  componentWillReceiveProps(nextProps) {
    this.setState({ totalNumber: nextProps.numbers.currentNumber });
  }

  render() {
    return(
      <div className="display">
        { this.state.totalNumber }
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    numbers: state.numbers,
    operation: state.operation
  };
};

export default connect(mapStateToProps)(Display);

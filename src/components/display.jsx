import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNum } from '../actions/index';
import { bindActionCreators } from 'redux';


class Display extends Component {
  constructor(props) {
    super(props);
    // this.state = { totalNumber: "0",
    //   operation: "",
    //   operationPressed: false};
  }

  // { this.props.numbers.currentNumber }

  // componentWillReceiveProps(nextProps) {
  //   let newNumber = this.state.totalNumber.concat(nextProps.numbers.currentNumber);
  //   if(newNumber[0] === '0') {
  //     newNumber = newNumber.slice(1);
  //   }
  //
  //   this.setState({ totalNumber: newNumber });
  // }


  render() {

    return(
      <div className="display">
        { this.props.numbers.currentNumber }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectNum: selectNum }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);

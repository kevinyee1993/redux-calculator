import React, { Component } from 'react';
import Button from '../components/button';

import { connect } from 'react-redux';
import { selectNumber } from '../actions/index';
import { bindActionCreators } from 'redux';


class ButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="button-wrapper">

        { this.props.currentNumber }

        <Button value="1" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>
        // <Button value="2" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>
        // <Button value="3" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentNumber: state.currentNumber.currentNumber };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNumber: selectNumber }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonWrapper);

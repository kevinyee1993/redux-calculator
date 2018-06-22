import React, { Component } from 'react';
import Button from '../components/button';

import { connect } from 'react-redux';
import { selectNumber } from '../actions/index';
import { bindActionCreators } from 'redux';


class ButtonWrapper extends Component {
  render() {
    return(
      <div className="button-wrapper">
        <Button value="1" selectNumber={ this.props.selectNumber }/>
        <Button value="2" selectNumber={ this.props.selectNumber }/>
        <Button value="3" selectNumber={ this.props.selectNumber }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNumber: selectNumber }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonWrapper);

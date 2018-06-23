import React, { Component } from 'react';

import Button from '../components/button';
import OperationButton from '../components/operation_button';

import { connect } from 'react-redux';
import { selectNumber } from '../actions/index';
import { bindActionCreators } from 'redux';


class ButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  createNumberButtons() {
    const numbers = [0,1,2,3,4,5,6,7,8,9];

    const numberButtons = numbers.map( number => {
      return (
        <Button
      value={ number.toString() }
      key={ number }
      selectNumber={ this.props.selectNumber }
      currentNumber={ this.props.currentNumber }
      />
          );
        }
     );

     return numberButtons;

  }



  // <Button value="1" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>
  // <Button value="2" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>
  // <Button value="3" selectNumber={ this.props.selectNumber } currentNumber={ this.props.currentNumber }/>

  render() {
    let numberButtons = this.createNumberButtons();

    return(
      <div className="button-wrapper">

        { this.props.currentNumber }

        { numberButtons }

        <OperationButton value="+"/>
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

import NumberButton from '../components/number_button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNum } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    currentNumber: state.numbers.currentNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectNum: selectNum }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButton);

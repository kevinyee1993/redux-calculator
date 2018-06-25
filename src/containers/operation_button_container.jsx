import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OperationButton from '../components/operation_button';
import { selectOperation } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    operation: state.operation
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectOperation: selectOperation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationButton);

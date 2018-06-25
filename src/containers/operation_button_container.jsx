import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OperationButton from '../components/operation_button';
import { selectOperation } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectOperation: selectOperation }, dispatch);
};

export default connect(null, mapDispatchToProps)(OperationButton);

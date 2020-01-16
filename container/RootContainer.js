import { connect } from 'react-redux';

import { Counter } from '../component/Counter';
import {
  PLUS_COUNTER,
  MINUS_COUNTER
} from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch({
      type: PLUS_COUNTER
    }),
    minus: () => dispatch({
      type: MINUS_COUNTER
    })
  }
}

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export { RootContainer };

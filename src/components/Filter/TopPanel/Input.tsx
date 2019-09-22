import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { actions } from '../../../actions';

import { InputView } from './Input.view';

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  onChange: (value: string) => dispatch(actions.filter.setQueryString(value)),
});

export const Input = connect(null, mapDispatchToProps)(InputView);

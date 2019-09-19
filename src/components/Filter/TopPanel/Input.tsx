import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../../../actions';

import { InputView } from './Input.view';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: actions.filter.setQueryString(dispatch),
});

export const Input = connect(null, mapDispatchToProps)(InputView);

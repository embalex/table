import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { actions } from '../../../actions';
import { LeftPanelView } from './LeftPanel.view';

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  setAssembly: (value: string) => dispatch(actions.filter.setAssembly(value)),
  setReview: (value: string) => dispatch(actions.filter.setReview(value)),
});

export const LeftPanel = connect(null, mapDispatchToProps)(LeftPanelView);

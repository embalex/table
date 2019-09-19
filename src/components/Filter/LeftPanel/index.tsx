import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../../../actions';
import { LeftPanelView } from './LeftPanel.view';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setAssembly: actions.filter.setAssembly(dispatch),
  setReview: actions.filter.setReview(dispatch),
});

export const LeftPanel = connect(null, mapDispatchToProps)(LeftPanelView);

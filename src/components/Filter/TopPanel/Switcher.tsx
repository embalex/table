import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../../../actions';
import { Order } from '../../../constants/order';

import { SwitcherView } from './Switcher.view';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onMoveRight: () => actions.filter.setOrder(dispatch)(Order.Ascent),
  onMoveLeft: () => actions.filter.setOrder(dispatch)(Order.Descent),
});

export const Switcher = connect(null, mapDispatchToProps)(SwitcherView);

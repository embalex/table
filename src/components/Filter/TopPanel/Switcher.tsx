import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { actions } from '../../../actions';
import { Order } from '../../../constants/order';

import { SwitcherView } from './Switcher.view';

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  onMoveRight: () => dispatch(actions.filter.setOrder(Order.Ascent)),
  onMoveLeft: () => dispatch(actions.filter.setOrder(Order.Descent)),
});

export const Switcher = connect(null, mapDispatchToProps)(SwitcherView);

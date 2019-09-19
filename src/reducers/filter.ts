import { Action, Reducer } from 'redux';
import { AssemblyStatus } from '../constants/assemblyStatus';
import { ReviewStatus } from '../constants/reviewStatus';
import { Order } from '../constants/order';

import { FILTER } from '../actions/filter';

interface IDefaultState {
  assembly: string;
  order: Order;
  review: string;
  textQuery: string;
}

const defaultState: IDefaultState = {
  assembly: AssemblyStatus[0].userFriendly,
  order: Order.Descent,
  review: ReviewStatus[0].userFriendly,
  textQuery: '',
};

interface IAction extends Action<FILTER> { payload?: string; }

export const filterReducer: Reducer<IDefaultState, IAction> = (state = defaultState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case FILTER.SET_ASSEMBLY:
      newState.assembly = action.payload || defaultState.assembly;
      break;
    case FILTER.SET_REVIEW:
      newState.review = action.payload || defaultState.review;
      break;
    case FILTER.SET_ORDER:
      newState.order = action.payload as Order || defaultState.order;
      break;
    case FILTER.SET_TEXT_QUERY:
      newState.textQuery = action.payload || defaultState.textQuery;
      break;
  }

  return newState;
};

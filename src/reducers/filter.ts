import { Action, Reducer } from 'redux';
import { AssemblyStatus } from '../constants/assemblyStatus';
import { ReviewStatus } from '../constants/reviewStatus';
import { Order } from '../constants/order';

import { FILTER } from '../actions/filter';

const ITEMS_PER_PAGE = 10;

export interface IDefaultState {
  assembly: string;
  order: Order;
  review: string;
  textQuery: string;
  from: number;
  to: number;
}

const defaultState: IDefaultState = {
  assembly: AssemblyStatus[0].api,
  order: Order.Descent,
  review: ReviewStatus[0].api,
  textQuery: '',
  from: 0,
  to: ITEMS_PER_PAGE,
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
    case FILTER.DEC_START_ITEM:
      newState.from = state.from < ITEMS_PER_PAGE ? 0 : state.from - ITEMS_PER_PAGE;
      newState.to = newState.from + ITEMS_PER_PAGE;
      break;
    case FILTER.INC_START_ITEM:
      newState.from = state.from + ITEMS_PER_PAGE;
      newState.to = newState.from + ITEMS_PER_PAGE;
      break;
  }

  return newState;
};

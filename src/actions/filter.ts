import { ActionCreator } from 'redux';

import { tableActions } from './table';

import { Order } from '../constants/order';

export enum FILTER {
  SET_ASSEMBLY = 'SET_ASSEMBLY',
  SET_REVIEW = 'SET_REVIEW',
  SET_ORDER = 'SET_ORDER',
  SET_TEXT_QUERY = 'SET_TEXT_QUERY',
}

type IThunkAction<T> = ActionCreator<void>;

const createAction = <T = string>(type: FILTER) => (payload: T): IThunkAction<void> =>
  (dispatch) => {
    dispatch({ payload, type });
    dispatch(tableActions.getData());
  };

const setAssembly = createAction(FILTER.SET_ASSEMBLY);
const setReview = createAction(FILTER.SET_REVIEW);
const setOrder = createAction<Order>(FILTER.SET_ORDER);
const setQueryString = createAction(FILTER.SET_TEXT_QUERY);

export const filterActions = {
  setAssembly,
  setOrder,
  setQueryString,
  setReview,
};

import { Action, Reducer } from 'redux';

import { IAssembly } from '../definitions/assembly';

import { TABLE } from '../actions/table';



export interface IDefaultState {
  data: IAssembly[];
  total: number;
}

interface IAction extends Action<TABLE> { payload?: IDefaultState; }

const defaultState: IDefaultState = {
  data: [],
  total: 0,
};

export const tableReducer: Reducer<IDefaultState, IAction> = (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case TABLE.GET_DATA:
      newState = action.payload || defaultState;
      break;
  }

  return newState;
};

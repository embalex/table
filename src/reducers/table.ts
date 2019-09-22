import { Action, Reducer } from 'redux';

import { IAssembly } from '../definitions/assembly';

import { TABLE } from '../actions/table';


interface IAction extends Action<TABLE> { payload?: IAssembly[]; }

export const tableReducer: Reducer<IAssembly[], IAction> = (state = [], action) => {
  let newState = state;

  switch (action.type) {
    case TABLE.GET_DATA:
      newState = action.payload || [];
      break;
  }

  return newState;
};

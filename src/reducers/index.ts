import { combineReducers } from 'redux';

import { IAssembly } from '../definitions/assembly';

import { filterReducer, IDefaultState as IFilter } from './filter';
import { tableReducer } from './table';

export interface IState {
  data: IAssembly[];
  filter: IFilter;
}

export default combineReducers({
  data: tableReducer,
  filter: filterReducer,
});

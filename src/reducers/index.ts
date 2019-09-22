import { combineReducers } from 'redux';

import { IAssembly } from '../definitions/assembly';

import { filterReducer, IDefaultState as IFilter } from './filter';
import { tableReducer, IDefaultState as ITable } from './table';

export interface IState {
  data: ITable;
  filter: IFilter;
}

export default combineReducers({
  data: tableReducer,
  filter: filterReducer,
});

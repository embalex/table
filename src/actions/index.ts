import { filterActions } from './filter';
import { tableActions } from './table';

export const actions = {
  filter: { ...filterActions },
  table: { ...tableActions },
};

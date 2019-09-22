import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';

import { IAssembly } from '../definitions/assembly';
import { srcData } from '../mocks/srcData';
import { debounce } from '../utils';

export enum TABLE {
  GET_DATA = 'GET_DATA',
}

type IThunkAction<T> = ActionCreator<void>;

const receiveData = async (filter: object, onReceive: (value: IAssembly[]) => void): Promise<void> => {
  let tableData: IAssembly[] = [];

  try {
    tableData = await axios.get('/api/assembly', { params: filter });
  } catch (e) {
    console.log('Error! -> ', e);
    console.log('Add mocks data! ');

    for (let i = 0; i < 10; i += 1) {
      tableData.push(srcData[i] as IAssembly);
    }
  }

  onReceive(tableData);
};

const debouncedReceiver = debounce(500, receiveData);

const getData = (): IThunkAction<void> =>
  async (dispatch, getState) => {
    const { filter } = getState();

    await debouncedReceiver(
      filter,
      (value: IAssembly[]) => dispatch({ type: TABLE.GET_DATA, payload: value }),
    );
  };

const removeItem = (id: string): IThunkAction<void> =>
  async (dispatch) => {
    try {
      const tableData = await axios.delete('/api/assembly', { params: { id } });

      dispatch({ type: TABLE.GET_DATA, payload: tableData });
    } catch (e) {
      console.log('Error! -> ', e);
    }
  };

const editItem = (id: string): IThunkAction<void> =>
  () => {
    window.alert('Not supported at demo version ))');
  };

export const tableActions = {
  editItem,
  getData,
  removeItem,
  viewProcess: editItem,
};

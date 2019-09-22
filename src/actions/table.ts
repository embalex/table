import axios from 'axios';
import { ActionCreator } from 'redux';

import { IAssembly } from '../definitions/assembly';
import { srcData } from '../mocks/srcData';
import { debounce } from '../utils';

export enum TABLE {
  GET_DATA = 'GET_DATA',
}

type IThunkAction<T> = ActionCreator<void>;

const receiveData = async (
  filter: object,
  onReceive: (value: IAssembly[], total: number) => void,
): Promise<void> => {
  let tableData: IAssembly[] = [];
  let total: number;

  try {
    const response: { data: IAssembly[]; total: number } =
      await axios.get('/api/assembly', { params: filter });

    tableData = response.data;
    total = response.total;
  } catch (e) {
    console.log('Error! -> ', e);
    console.log('Add mocks data! ');

    for (let i = 0; i < 10; i += 1) {
      tableData.push(srcData[i] as IAssembly);
    }

    total = 123;
  }

  onReceive(tableData, total);
};

const debouncedReceiver = debounce(500, receiveData);

const getData = (): IThunkAction<void> =>
  async (dispatch, getState) => {
    const { filter } = getState();

    await debouncedReceiver(
      filter,
      (data: IAssembly[], total: number): void => dispatch({ type: TABLE.GET_DATA, payload: { data, total } }),
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

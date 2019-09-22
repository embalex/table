import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../reducers';

import { TableHeaderView } from './TableHeader.view';

interface IConnectedProps {
  numbers: number;
}

const mapStateToProps = (state: IState): IConnectedProps => ({
  numbers: state.data.total,
});

export const TableHeader: React.ComponentType<{}> =
  connect(mapStateToProps)(TableHeaderView);
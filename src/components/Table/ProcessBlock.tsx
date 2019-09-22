import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IState } from '../../reducers';
import { actions } from '../../actions';

import { ProcessBlockView } from './ProcessBlock.view';

interface IOwnProps {
  id: string;
}

interface IConnectedProps {
  onEdit(): void;
  onRemove(): void;
  onViewProcess(): void;
}

const mapDispatchToProps =
  (dispatch: ThunkDispatch<IState, any, any>, { id }: IOwnProps): IConnectedProps => ({
    onEdit: () => dispatch(actions.table.editItem(id)),
    onRemove: () => dispatch(actions.table.removeItem(id)),
    onViewProcess: () => dispatch(actions.table.viewProcess(id)),
  });

export const ProcessBlock: React.ComponentType<IOwnProps> =
  connect(null, mapDispatchToProps)(ProcessBlockView);

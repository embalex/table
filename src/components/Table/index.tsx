import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { actions } from '../../actions';
import { AssemblyStatus } from '../../constants/assemblyStatus';
import { IAssembly } from '../../definitions/assembly';
import { IState } from '../../reducers';
import { ReviewStatus } from '../../constants/reviewStatus';

import * as utils from '../../utils';

import { Row } from './Row';

import { Wrapper } from './styled';

interface IConnectedProps {
  data: IAssembly[];
}

interface IDispatchedProps {
  toNextPage(): void;
  toPreviousPage(): void;
}

const _Table: React.FC<IConnectedProps & IDispatchedProps> =
  ({ data, toNextPage, toPreviousPage }) => {
    const THR_TOP = 100;
    const THR_BOT = 100;
    let requestFlag: boolean = true;

    const rows = data.map(
      ({ _id, title, assemblyStatus, reviewStatus, updated }) => (
        <Row
          key={_id}
          id={_id}
          status={{
            caption: utils.apiToUserFriendly(AssemblyStatus, assemblyStatus),
            meta: utils.getMeta(AssemblyStatus, assemblyStatus),
          }}
          info={{
            header: title,
            items: [{
              label: 'Review status',
              value: utils.apiToUserFriendly(ReviewStatus, reviewStatus),
              meta: utils.getMeta(ReviewStatus, reviewStatus),
            }, {
              label: 'Updated',
              value: utils.timeToUserFriendly(updated),
            }],
          }}
        />
      ),
    );

    const scrollHandler = ({ target }: any) => {
      if (
        !requestFlag
        && (target.scrollHeight - THR_BOT < target.clientHeight + target.scrollTop)
      ) {
        toNextPage();
        requestFlag = true;
      }

      if (!requestFlag && (target.scrollTop < THR_TOP)) {
        toPreviousPage();
        requestFlag = true;
      }

      if (
        (target.scrollTop > THR_TOP)
        && ((target.scrollTop + target.clientHeight) < (target.scrollHeight - THR_BOT))
      ) {
        requestFlag = false;
      }
    };

    return (
      <Wrapper onScroll={scrollHandler}>
        {rows}
      </Wrapper>
    );

  }

const mapStateToProps = (state: IState): IConnectedProps => ({
  data: state.data.data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, any, any>): IDispatchedProps => ({
  toNextPage: () => dispatch(actions.filter.incStartItem()),
  toPreviousPage: () => dispatch(actions.filter.decStartItem()),
});

export const Table = connect(mapStateToProps, mapDispatchToProps)(_Table);

import * as React from 'react';
import { connect } from 'react-redux';

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

const _Table: React.FC<IConnectedProps> = ({ data }) => {
  React.useEffect(() => {

  }, []);

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

  return (
    <Wrapper>
      {rows}
    </Wrapper>
  );

}

const mapStateToProps = (state: IState): IConnectedProps => ({
  data: state.data,
});

export const Table = connect(mapStateToProps)(_Table);

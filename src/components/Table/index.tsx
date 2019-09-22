import * as React from 'react';

import { Row } from './Row';

import { srcData } from '../../mocks/srcData';
import { AssemblyStatus } from '../../constants/assemblyStatus';
import { ReviewStatus } from '../../constants/reviewStatus';

import * as utils from '../../utils';

import { Wrapper } from './styled';

export const Table: React.FC<{}> = () => {
  const rows = [];
  for (let i = 0; i < 20; i += 1) {
    const { _id, title, assemblyStatus, reviewStatus, updated } = srcData[i];

    rows.push(
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
    );
  };

  return (
    <Wrapper>
      {rows}
    </Wrapper>
  );

}

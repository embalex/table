import * as React from 'react';

import { assemblyFilter, reviewFilter } from './constants';
import { Filter } from './Filter';
import {
  Header,
  Wrapper,
} from './styled';

export const LeftPanel: React.FC<{}> = () => (
  <Wrapper>
    <Header>Filter</Header>
    <Filter caption={assemblyFilter.caption} items={assemblyFilter.items} />
    <Filter caption={reviewFilter.caption} items={reviewFilter.items} />
  </Wrapper>
);

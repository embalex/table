import * as React from 'react';

import { Filter } from '../Filter';

import {
  Wrapper,
  Header,
  HeaderText,
  HeaderBadge,
} from './styled';

export const TableHeader: React.FC<{}> = () => {

  return (
    <Wrapper>
      <Header>
        <HeaderText>Assembly processes</HeaderText>
        <HeaderBadge>220</HeaderBadge>
      </Header>
      <Filter.TopPanel />
    </Wrapper>
  );
}
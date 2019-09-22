import * as React from 'react';

import { Filter } from '../Filter';

import {
  Wrapper,
  Header,
  HeaderText,
  HeaderBadge,
} from './styled';

interface IProps {
  numbers: number;
}

export const TableHeaderView: React.FC<IProps> = ({ numbers }) => {

  return (
    <Wrapper>
      <Header>
        <HeaderText>Assembly processes</HeaderText>
        {numbers !== 0 && <HeaderBadge>{numbers}</HeaderBadge>}
      </Header>
      <Filter.TopPanel />
    </Wrapper>
  );
}
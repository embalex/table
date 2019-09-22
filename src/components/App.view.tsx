import * as React from 'react';

import { Filter } from './Filter';
import { Header } from './Header';
import { Table } from './Table';
import { TableHeader } from './TableHeader';


import {
  AppWrapper,
  BodyWrapper,
  LeftPanelWrapper,
  TableWrapper,
} from './App.styled';

export const AppView: React.FC<{ onLoad: () => void }> = ({ onLoad }) => (
    <AppWrapper>
      <Header />
      <BodyWrapper>
        <LeftPanelWrapper>
          <Filter.LeftPanel />
        </LeftPanelWrapper>
        <TableWrapper>
          <TableHeader />
          <Table />
        </TableWrapper>
      </BodyWrapper>
    </AppWrapper>
);

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Filter } from './Filter';
import { Header } from './Header';
import { TableHeader } from './TableHeader';
import { Table } from './Table';

import { theme } from '../theme';

import {
  AppWrapper,
  BodyWrapper,
  LeftPanelWrapper,
  TableWrapper,
} from './App.styled';

const App: React.FC<{}> = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default App;

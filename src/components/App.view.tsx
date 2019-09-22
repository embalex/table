import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import { Filter } from './Filter';
import { Header } from './Header';
import { Table } from './Table';
import { TableHeader } from './TableHeader';

import { theme } from '../theme';

import {
  AppWrapper,
  BodyWrapper,
  LeftPanelWrapper,
  TableWrapper,
} from './App.styled';

export const AppView: React.FC<{ onLoad: () => void }> = ({ onLoad }) => {
  React.useEffect(() => {
    onLoad();
  }, []);

  return (
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
}

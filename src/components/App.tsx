import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './Header';
import { LeftFilterPanel } from './LeftFilterPanel';

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
        <LeftFilterPanel />
      </LeftPanelWrapper>
      <TableWrapper>
        <div>Table</div>
      </TableWrapper>
      </BodyWrapper>
    </AppWrapper>
  </ThemeProvider>
);

export default App;

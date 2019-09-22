import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ThemeProvider } from 'styled-components';

import { actions } from '../actions';
import { IState } from '../reducers';

import { AppView } from './App.view';

import { theme } from '../theme';

const App: React.FC<{ onLoad: () => void }> = ({ onLoad }) => {
  React.useEffect(() => {
    onLoad();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppView onLoad={onLoad} />
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, any, any>) => ({
  onLoad: () => setTimeout(() => dispatch(actions.table.getData()), 3000),
});

export default connect(null, mapDispatchToProps)(App);

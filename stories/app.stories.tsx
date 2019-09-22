import * as React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import App from '../src/components/App';
import configureStore from '../src/store';

storiesOf('TRA app ', module)
  .addParameters({ options: { isFullscreen: true, } })
  .add('test task', () => (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  ));

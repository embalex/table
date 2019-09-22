import * as React from 'react';
import { shallow } from 'enzyme';

import { AppView } from './App.view';

describe('App component', () => {
  it('renders without crashing', () => {

    shallow(<AppView onLoad={jest.fn()} />);
  });
});

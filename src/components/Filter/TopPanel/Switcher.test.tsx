import * as React from 'react';

import { shallow } from 'enzyme';

import { SwitcherView } from './Switcher.view';

describe('Filter SwitcherView component', () => {
  it('renders without crashing', () => {
    shallow(<SwitcherView />);
  });
});

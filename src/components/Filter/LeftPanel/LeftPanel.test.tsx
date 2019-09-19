import * as React from 'react';
import { shallow } from 'enzyme';

import { LeftPanel } from './index';

describe('Filter LeftPanel component', () => {
  it('renders without crashing', () => {

    shallow(<LeftPanel />);
  });
});

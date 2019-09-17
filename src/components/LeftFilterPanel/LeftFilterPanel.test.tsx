import * as React from 'react';
import { shallow } from 'enzyme';

import { LeftFilterPanel } from './index';

describe('LeftFilterPanel component', () => {
  it('renders without crashing', () => {

    shallow(<LeftFilterPanel />);
  });
});

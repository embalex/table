import * as React from 'react';
import { shallow } from 'enzyme';

import { TableHeader } from './index';

describe ('TableHeader component', () => {
  it('renders without crashing', () => {

    shallow(<TableHeader />);
  })
});

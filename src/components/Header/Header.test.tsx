import * as React from 'react';
import { shallow } from 'enzyme';

import { Header } from './index';

describe ('Header component', () => {
  it('renders without crashing', () => {

    shallow(<Header />);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { TableHeaderView } from './TableHeader.view';

describe('TableHeaderView component', () => {
  it('renders without crashing', () => {

    shallow(<TableHeaderView numbers={3} />);
  });
});

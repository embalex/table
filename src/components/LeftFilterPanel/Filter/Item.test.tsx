import * as React from 'react';
import { shallow } from 'enzyme';

import { Item } from './Item';

describe('Item component', () => {
  it('renders without crashing when selected', () => {
    shallow(<Item caption="Test" selected={true} onSelect={jest.fn()} />);
  });
  it('renders without crashing when deselected', () => {
    shallow(<Item caption="Test" selected={false} onSelect={jest.fn()} />);
  });
});

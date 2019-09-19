import * as React from 'react';
import { shallow } from 'enzyme';

import { Filter } from './index';
import { IFilter } from './types';

describe('Filter component', () => {
  it('renders without crashing', () => {
    const filter: IFilter = {
      caption: 'test',
      items: [{
        caption: 'test item',
        value: 'smth value',
      }],
    }

    shallow(<Filter caption={filter.caption} items={filter.items} />);
  });
});

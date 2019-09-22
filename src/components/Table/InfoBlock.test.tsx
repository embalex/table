import * as React from 'react';
import { shallow } from 'enzyme';

import { InfoBlock } from './InfoBlock';

describe('InfoBlock component', () => {
  it('renders without crashing', () => {
    shallow(
      <InfoBlock
        header="Test"
        items={[{
          label: 'Test caption',
          value: 'Test value',
        }]}
      />);
  });
});

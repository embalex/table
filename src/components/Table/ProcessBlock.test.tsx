import * as React from 'react';
import { shallow } from 'enzyme';

import { ProcessBlock } from './ProcessBlock';

describe('ProcessBlock component', () => {
  it('renders without crashing', () => {

    shallow(<ProcessBlock />);
  });
});

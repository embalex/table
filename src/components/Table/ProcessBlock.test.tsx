import * as React from 'react';
import { shallow } from 'enzyme';

import { ProcessBlockView } from './ProcessBlock.view';

describe('ProcessBlockView component', () => {
  it('renders without crashing', () => {

    shallow(
      <ProcessBlockView
        onEdit={jest.fn()}
        onRemove={jest.fn()}
        onViewProcess={jest.fn()}
      />,
    );
  });
});

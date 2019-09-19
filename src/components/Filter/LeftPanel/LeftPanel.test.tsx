import * as React from 'react';

import { shallow } from 'enzyme';

import { LeftPanelView } from './LeftPanel.view';

describe('Filter LeftPanel component', () => {
  it('renders without crashing', () => {
    shallow(<LeftPanelView setAssembly={jest.fn()} setReview={jest.fn()}/>);
  });
});

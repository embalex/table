import * as React from 'react';

import { shallow } from 'enzyme';

import { InputView } from './Input.view';

describe('Filter InputView component', () => {
  it('renders without crashing without placeholder', () => {
    shallow(<InputView onChange={jest.fn()}/>);
  });
  it('renders without crashing with placeholder', () => {
    shallow(<InputView placeholder="Test placeholder" onChange={jest.fn()}/>);
  });
});

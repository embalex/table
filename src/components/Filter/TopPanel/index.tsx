import * as React from 'react';

import { Input } from './Input';
import { Switcher } from './Switcher';

import {
  Text,
  Wrapper,
} from './styled';

export const TopPanel: React.FC<{}> = () => (
  <Wrapper>
    <Text>Show</Text>
    <Switcher />
    <Input />
  </Wrapper>
);

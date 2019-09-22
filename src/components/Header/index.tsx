import * as React from 'react';

import { Icon } from '../../icons';

import {
  Text,
  Wrapper,
} from './styled';

export const Header: React.FC<{}> = () => (
  <Wrapper>
    <Icon.TRA />
    <Text>Design2Robofacturing</Text>
  </Wrapper>
);

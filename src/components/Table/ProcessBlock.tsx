import * as React from 'react';

import { Icon } from '../../icons';

import {
  Button,
  ButtonTextWrapper,
  IconWrapper,
  Wrapper,
} from './ProcessBlock.styled';

interface IProps {
  id: string;
}

export const ProcessBlock: React.FC<IProps> = ({ id }) => (
  <Wrapper>
    <IconWrapper>
      <Icon.Edit />
      <Icon.Remove />
    </IconWrapper>
    <Button>
      <ButtonTextWrapper>
        View process
      </ButtonTextWrapper>
      <Icon.Arrow />
    </Button>
  </Wrapper>
);

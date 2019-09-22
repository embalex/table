import * as React from 'react';

import { Icon } from '../../icons';

import {
  Button,
  ButtonTextWrapper,
  IconDivWrapper,
  IconWrapper,
  Wrapper,
} from './ProcessBlock.styled';

interface IProps {
  onEdit(): void;
  onRemove(): void;
  onViewProcess(): void;
}

export const ProcessBlockView: React.FC<IProps> = ({ onEdit, onRemove, onViewProcess }) => (
  <Wrapper>
    <IconWrapper>
      <IconDivWrapper onClick={onEdit}>
        <Icon.Edit />
      </IconDivWrapper>
      <IconDivWrapper onClick={onRemove}>
        <Icon.Remove />
      </IconDivWrapper>
    </IconWrapper>
    <Button onClick={onViewProcess}>
      <ButtonTextWrapper>
        View process
      </ButtonTextWrapper>
      <Icon.Arrow />
    </Button>
  </Wrapper>
);

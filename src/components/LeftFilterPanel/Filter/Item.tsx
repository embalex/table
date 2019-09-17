import * as React from 'react';

import {
  Deselected,
  Selected,
} from './Item.styled';

interface IItem {
  caption: string;
  selected: boolean;
  onSelect(): void;
}

export const Item: React.FC<IItem> = ({ caption, selected, onSelect }) => {
  const Wrapper = selected ? Selected : Deselected;

  return (
    <Wrapper onClick={onSelect}>
      {caption}
    </Wrapper>
  );
}

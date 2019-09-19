import * as React from 'react';

import { Item } from './Item';
import { IFilter } from './types';

import {
  Caption,
  Wrapper,
} from './styled';

type IProps = IFilter & { onChange?(value: string): void };

export const Filter: React.FC<IProps> = ({ caption, items, onChange }) => {
  const [selected, setSelected] = React.useState(items[0].value);

  const onChangeFilter = (value: string) => {
    setSelected(value);

    if (onChange) {
      onChange(value);
    }
  };

  const renderedItems = items.map(({ caption: itemCaption, value }) => (
    <Item
      key={value}
      caption={itemCaption}
      selected={value === selected}
      onSelect={() => onChangeFilter(value)}
    />
  ));

  return (
    <Wrapper>
      <Caption>{caption}</Caption>
      {renderedItems}
    </Wrapper>
  );
};

import * as React from 'react';

import {
  Header,
  Wrapper,
  InfoRow,
  InfoLabel,
  InfoSeparator,
  InfoValue,
} from './InfoBlock.styled';

interface IProps {
  header: string;
  items: {
    label: string;
    value: string;
    meta?: object;
  }[];
}

export const InfoBlock: React.FC<IProps> = ({ header, items }) => {
  const info = items.map(({ label, value, meta }) => (
    <InfoRow key={label}>
      <InfoLabel>{label}</InfoLabel>
      <InfoSeparator />
      <InfoValue meta={meta}>{value}</InfoValue>
    </InfoRow>
  ));

  return (
    <Wrapper>
      <Header>{header}</Header>
      {info}
    </Wrapper>
  );
}

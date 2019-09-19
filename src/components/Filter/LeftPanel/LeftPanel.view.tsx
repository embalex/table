import * as React from 'react';

import { assemblyFilter, reviewFilter } from './constants';
import { Filter } from './Filter';
import {
  Header,
  Wrapper,
} from './styled';

interface IConnectedProps {
  setAssembly(value: string): void;
  setReview(value: string): void;
}

export const LeftPanelView: React.FC<IConnectedProps> = ({ setAssembly, setReview }) => (
  <Wrapper>
    <Header>Filter</Header>
    <Filter caption={assemblyFilter.caption} items={assemblyFilter.items} onChange={setAssembly} />
    <Filter caption={reviewFilter.caption} items={reviewFilter.items} onChange={setReview} />
  </Wrapper>
);

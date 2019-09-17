import { AssemblyStatus } from '../../constants/assemblyStatus';
import { ReviewStatus } from '../../constants/reviewStatus';
import { IFilter } from './Filter/types';

export const assemblyFilter: IFilter = {
  caption: 'Assembly',
  items: AssemblyStatus.map(({ api, userFriendly }) => ({ caption: userFriendly, value: api })),
};

export const reviewFilter: IFilter = {
  caption: 'Review',
  items: ReviewStatus.map(({ api, userFriendly }) => ({ caption: userFriendly, value: api })),
};

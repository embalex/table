import { AssemblyStatusColors, IStatus } from './status.type';

export const AssemblyStatus: IStatus[] = [{
  api: 'ANY',
  userFriendly: 'Any',
}, {
  api: 'IN_REVIEW',
  userFriendly: 'In review',
  meta: {
    background: AssemblyStatusColors.inReview,
  },
}, {
  api: 'REVIEW_FINISHED',
  userFriendly: 'Finished',
  meta: {
    background: AssemblyStatusColors.finished,
  },
}];

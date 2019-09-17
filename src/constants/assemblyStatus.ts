import { IStatus } from './status.type';

export const AssemblyStatus: IStatus[] = [{
  api: 'ANY',
  userFriendly: 'Any',
}, {
  api: 'IN_REVIEW',
  userFriendly: 'In review',
}, {
  api: 'REVIEW_FINISHED',
  userFriendly: 'Review finished',
}];

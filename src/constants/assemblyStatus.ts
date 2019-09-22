import { IAssemblyStatus } from '../definitions/assembly';
import { AssemblyStatusColors, IStatus } from './status.type';

export const AssemblyStatus: IStatus[] = [{
  api: 'ANY',
  userFriendly: 'Any',
}, {
  api: IAssemblyStatus.inProcess,
  userFriendly: 'In review',
  meta: {
    background: AssemblyStatusColors.inReview,
  },
}, {
  api: IAssemblyStatus.finished,
  userFriendly: 'Finished',
  meta: {
    background: AssemblyStatusColors.finished,
  },
}];

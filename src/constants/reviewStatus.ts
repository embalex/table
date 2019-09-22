import { IReviewStatus } from '../definitions/assembly';
import { ReviewStatusColors, IStatus } from './status.type';

export const ReviewStatus: IStatus[] = [{
  api: 'ANY',
  userFriendly: 'Any',
}, {
  api: IReviewStatus.draft,
  userFriendly: 'Draft',
}, {
  api: IReviewStatus.solved,
  userFriendly: 'Solved',
}, {
  api: IReviewStatus.simulationRequested,
  userFriendly: 'Simulation requested',
}, {
  api: IReviewStatus.simulationPositive,
  meta: {
    color: ReviewStatusColors.ok,
  },
  userFriendly: 'Simulation positive',
}, {
  api: IReviewStatus.simulationNegative,
  meta: {
    color: ReviewStatusColors.error,
  },
  userFriendly: 'Simulation negative',
}];

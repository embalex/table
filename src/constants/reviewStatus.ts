import { ReviewStatusColors, IStatus } from './status.type';

export const ReviewStatus: IStatus[] = [{
  api: 'ANY',
  userFriendly: 'Any',
}, {
  api: 'DRAFT',
  userFriendly: 'Draft',
}, {
  api: 'SOLVED',
  userFriendly: 'Solved',
}, {
  api: 'SIMULATION_REQUESTED',
  userFriendly: 'Simulation requested',
}, {
  api: 'SIMULATION_POSITIVE',
  meta: {
    color: ReviewStatusColors.ok,
  },
  userFriendly: 'Simulation positive',
}, {
  api: 'SIMULATION_NEGATIVE',
  meta: {
    color: ReviewStatusColors.error,
  },
  userFriendly: 'Simulation negative',
}];

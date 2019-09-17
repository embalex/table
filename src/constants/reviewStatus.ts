import { AssemblyStatusColors, IStatus } from './status.type';

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
    color: AssemblyStatusColors.green,
  },
  userFriendly: 'Simulation positive',
}, {
  api: 'SIMULATION_NEGATIVE',
  meta: {
    color: AssemblyStatusColors.red,
  },
  userFriendly: 'Simulation negative',
}];

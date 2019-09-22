import { theme } from '../theme';

export const ReviewStatusColors = {
  error: theme.common.reviewColor.error,
  ok: theme.common.reviewColor.ok,
};

export const AssemblyStatusColors = {
  finished: theme.common.statusColor.finished,
  inReview: theme.common.statusColor.inProcess,
}

export interface IStatus {
  api: string;
  userFriendly: string;
  meta?: object;
};

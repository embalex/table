import { theme } from '../theme';

export const AssemblyStatusColors = {
  green: theme.common.statusColor.green,
  red: theme.common.statusColor.red,
};

export interface IStatus {
  api: string;
  userFriendly: string;
  meta?: {
    color: string;
  };
}
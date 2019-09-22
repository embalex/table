import moment from 'moment';
import { IStatus } from '../constants/status.type';

export const apiToUserFriendly = (srcObject: IStatus[], api: string): string => {
  const filteredObject = srcObject.filter(({ api: srcApi }) => api === srcApi);

  if (!filteredObject.length) { return 'Unknown api'; }
  if (filteredObject.length > 1) { return 'Multiple api'; }

  return filteredObject[0].userFriendly;
};

const userFriendlyToApi = (srcObject: IStatus[], userFriendly: string): string => {
  const filteredObject =
    srcObject.filter(({ userFriendly: srcUserFriendly }) => userFriendly === srcUserFriendly);

  if (!filteredObject.length) { return 'Unknown value'; }
  if (filteredObject.length > 1) { return 'Multiple value'; }

  return filteredObject[0].api;
};

export const getMeta = (srcObject: IStatus[], api: string): object => {
  const filteredObject =
    srcObject.filter(({ api: srcApi }) => api === srcApi);

  if (filteredObject.length !== 1) { return {}; }
  if (!filteredObject[0].meta) { return {}; }

  return filteredObject[0].meta;
};

export const timeToUserFriendly = (time: string): string => {
  const parsedTime = moment(time, 'YYYY-MM-DD HH:mm:ss Z');

  return moment(parsedTime).format('DD/MM/YYYY, HH:mm');
};

export const objectToCss = (srcObject: object): string => (
  Object.entries(srcObject)
    .reduce((str, [key, value]) => `${str} ${key}: ${value};`, '')
);

export const debounce = (timeMs: number, func: Function) => {
  let timer: any = null;

  return (...rest: any) => {
    if (timer) {
      clearInterval(timer);
    }

    timer = setTimeout(() => func(...rest), timeMs);
  };
};
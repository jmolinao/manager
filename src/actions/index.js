import { EMAIL_CHANGE } from './types';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};

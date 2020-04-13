import { ALERT, ActionTypes } from '../../types';

export const alertReducer = (
  alert: boolean = false,
  action: ActionTypes,
): boolean => {
  switch (action.type) {
    case ALERT:
      return !alert;

    default:
      return alert;
  }
};

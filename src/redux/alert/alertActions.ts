import { ALERT, ActionTypes } from '../../types';

export const alertAction = (alert: boolean): ActionTypes => ({
  type: ALERT,
  payload: alert,
});

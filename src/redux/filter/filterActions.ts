import { FILTER, ActionTypes } from '../../types';

export const filterContacts = (filter: string): ActionTypes => ({
  type: FILTER,
  payload: filter,
});

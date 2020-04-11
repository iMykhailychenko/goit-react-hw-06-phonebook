import { TOGGLE_ELEM, ActionTypes } from '../../types';

export const toggleForm = (isOpen: boolean): ActionTypes => ({
  type: TOGGLE_ELEM,
  payload: isOpen,
});

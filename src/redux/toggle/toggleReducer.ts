import { TOGGLE_ELEM, ActionTypes } from '../../types';

export const toggleReducer = (
  isOpen: boolean = true,
  action: ActionTypes,
): boolean => {
  switch (action.type) {
    case TOGGLE_ELEM:
      return !isOpen;

    default:
      return isOpen;
  }
};

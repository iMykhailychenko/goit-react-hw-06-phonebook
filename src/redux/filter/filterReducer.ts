import { FILTER, ActionTypes } from '../../types';

export const filterReducer = (
  filter: string = '',
  action: ActionTypes,
): string => {
  switch (action.type) {
    case FILTER:
      return action.payload;

    default:
      return filter;
  }
};

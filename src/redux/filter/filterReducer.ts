import { FILTER, ActionTypes } from '../../types';

export const filterReducer = (
  filter: string = '',
  action: ActionTypes,
): string => {
  switch (action.type) {
    case FILTER:
      return filter;

    default:
      return filter;
  }
};

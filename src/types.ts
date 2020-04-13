export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const FILTER = 'FILTER';
export const TOGGLE_ELEM = 'TOGGLE_ELEM';
export const ALERT = 'ALERT';

export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IState {
  contacts: IContact[];
  filter: string;
  toggleOpen: boolean;
  alert: boolean
}

// Action types
interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: IContact;
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT;
  payload: string;
}

interface FilterAction {
  type: typeof FILTER;
  payload: string;
}

interface ToggleAction {
  type: typeof TOGGLE_ELEM;
  payload: boolean;
}

interface AlertAction {
  type: typeof ALERT;
  payload: boolean;
}

export type ActionTypes =
  | AddContactAction
  | RemoveContactAction
  | FilterAction
  | ToggleAction
  | AlertAction;

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const FILTER = 'FILTER';
export const TOGGLE_ELEM = 'TOGGLE_ELEM';

export interface IContact {
  readonly id: string;
  readonly name: string;
  readonly number: string;
}

export interface IState {
  contacts: IContact[];
  filter: string;
  toggleOpen: boolean;
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

export type ActionTypes =
  | AddContactAction
  | RemoveContactAction
  | FilterAction
  | ToggleAction

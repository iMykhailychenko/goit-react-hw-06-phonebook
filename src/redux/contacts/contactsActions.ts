import uuidv1 from 'uuid/v1';
import { ADD_CONTACT, REMOVE_CONTACT, ActionTypes } from '../../types';

export const addContacts = (name: string, number: string): ActionTypes => ({
  type: ADD_CONTACT,
  payload: { id: uuidv1(), name, number },
});

export const removeContacts = (id: string): ActionTypes => ({
  type: REMOVE_CONTACT,
  payload: id,
});

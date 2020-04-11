import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  IContact,
  ActionTypes,
} from '../../types';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from '../../local-storage/LocalStorageData';
import { defaultValue } from '../../helpers/helpers';

const initialContacts: IContact[] = getDataFromLocalStorage(
  'contacts',
  defaultValue,
);

export const contactsReducer = (
  contacts: IContact[] = initialContacts,
  action: ActionTypes,
): IContact[] => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContactsList: IContact[] = [action.payload, ...contacts];
      setDataToLocalStorage('contacts', newContactsList);
      return newContactsList;

    case REMOVE_CONTACT:
      const filteredContactsList: IContact[] = contacts.filter(
        contact => contact.id !== action.payload,
      );
      setDataToLocalStorage('contacts', filteredContactsList);
      return filteredContactsList;

    default:
      return contacts;
  }
};

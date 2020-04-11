import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';
import { toggleReducer } from './toggle/toggleReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  toggleOpen: toggleReducer,
});

export default rootReducer;

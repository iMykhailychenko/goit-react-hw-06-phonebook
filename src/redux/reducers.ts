import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';
import { toggleReducer } from './toggle/toggleReducer';
import { alertReducer } from './alert/alertReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  toggleOpen: toggleReducer,
  alert: alertReducer,
});

export default rootReducer;

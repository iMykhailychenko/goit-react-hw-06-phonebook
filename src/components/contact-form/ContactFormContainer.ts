import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { addContacts } from '../../redux/contacts/contactsActions';
import { alertAction } from '../../redux/alert/alertActions';
import { IState, IContact } from '../../types';
import { detectDuplicate } from '../../helpers/helpers';

const mapSTP = (state: IState): Pick<IState, 'contacts' | 'alert'> => ({
  contacts: state.contacts,
  alert: state.alert,
});

const mapDTP = (dispatch: any) => ({
  handleAddedContact: (name: string, number: string, contacts: IContact[], alert: boolean) => {
    const isDuplicate = detectDuplicate(number, contacts);

    if(isDuplicate) return dispatch(alertAction(alert));
    return dispatch(addContacts(name, number));
  },
});

export default connect(mapSTP, mapDTP)(ContactForm);

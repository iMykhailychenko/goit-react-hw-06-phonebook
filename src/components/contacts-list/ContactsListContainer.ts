import ContactsList from './ContactsList';
import { connect } from 'react-redux';
import { removeContacts } from '../../redux/contacts/contactsActions';
import { IState } from '../../types';

const mapStateToProps = (state: IState): Pick<IState, 'contacts' | 'toggleOpen' | 'filter'> => ({
  contacts: state.contacts,
  toggleOpen: state.toggleOpen,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleRemove: (id: string) => dispatch(removeContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

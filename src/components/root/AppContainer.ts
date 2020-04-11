import App from './App';
import { connect } from 'react-redux';
import { addContacts, removeContacts } from '../../redux/contacts/contactsActions';
import { filterContacts } from '../../redux/filter/filterActions';
import { toggleForm } from '../../redux/toggle/toggleActions';
import { IState } from '../../types';

const mapStateToProps = (state: IState): IState => ({
  contacts: state.contacts,
  filter: state.filter,
  toggleOpen: state.toggleOpen,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleAddedContact: (name: string, number: string) =>
    dispatch(addContacts(name, number)),
  handleRemove: (id: string) => dispatch(removeContacts(id)),
  handleClick: (toggleOpen: boolean) => dispatch(toggleForm(toggleOpen)),
  handleChanges: (filter: string) => dispatch(filterContacts(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

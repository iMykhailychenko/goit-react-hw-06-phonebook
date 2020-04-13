import Filter from './Filter';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterActions';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'filter' | 'contacts'> => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDTP = (dispatch: any) => ({
  onFilterChanges: (value: string) => dispatch(filterContacts(value)),
});

export default connect(mapSTP, mapDTP)(Filter);

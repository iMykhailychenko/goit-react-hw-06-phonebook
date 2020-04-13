import App from './App';
import { connect } from 'react-redux';
// import { filterContacts } from '../../redux/filter/filterActions';
import { toggleForm } from '../../redux/toggle/toggleActions';
import { IState } from '../../types';

const mapSTP = (state: IState): IState => ({
  ...state,
});

const mapDTP = (dispatch: any) => ({
  handleClick: (toggleOpen: boolean) => dispatch(toggleForm(toggleOpen)),
});

export default connect(mapSTP, mapDTP)(App);

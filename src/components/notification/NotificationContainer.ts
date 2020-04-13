import Notification from './Notification';
import { connect } from 'react-redux';
import { alertAction } from '../../redux/alert/alertActions';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'alert'> => ({
  alert: state.alert,
});

const mapDTP = (dispatch: any) => ({
  onWarnning: (alert: boolean) => dispatch(alertAction(alert)),
});

export default connect(mapSTP, mapDTP)(Notification);

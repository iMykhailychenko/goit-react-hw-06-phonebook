import React from 'react';
import styles from './Notification.module.css';

interface Props {
  alert: boolean;
  onWarnning(alert: boolean): void;
}

const Notification: React.FC<Props> = ({ alert, onWarnning }) => (
  <div className={styles.wrp}>
    <div className="popup">
      <h3 className={styles.title}>Attention!</h3>
      <p className={styles.text}>This number is alredy bilong to another contact</p>
      <button className={styles.btn} onClick={() => onWarnning(alert)} type="button">
        Ok
      </button>
    </div>
  </div>
);

export default Notification;

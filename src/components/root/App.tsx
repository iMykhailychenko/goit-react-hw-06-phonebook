import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

// impor components
import PhoneWrapper from '../../phone-wrapper/PhoneWrapper.styled';
import ContactForm from '../contact-form/ContactFormContainer';
import ContactsList from '../contacts-list/ContactsListContainer';
import Filter from '../filter/FilterContainer';
import Notification from '../notification/NotificationContainer';
// import Duplicate from '../render-props/Duplicate';

// import styles
import slideUp from '../../transitions/slideUp.module.css';
import alertTransition from '../../transitions/alert.module.css';
import slideUpForm from '../../transitions/slideUpForm.module.css';
import styles from './App.module.css';
import '../../transitions/slideTitle.css';
import '../base.css';

// import utils
import { IState } from '../../types';

interface Props extends IState {
  handleClick(toggleOpen: boolean): void;
}

const App: React.FC<Props> = ({ contacts, alert, toggleOpen, handleClick }) => {
  const toggleClass = classNames({
    toggle: true,
    open: toggleOpen,
    up: contacts.length < 3,
  });

  return (
    <PhoneWrapper>
      <div className={styles.wrp}>
        <CSSTransition in timeout={500} classNames="Logo" appear>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <CSSTransition
          in={alert}
          timeout={300}
          classNames={alertTransition}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <CSSTransition
          in={toggleOpen || !contacts.length}
          timeout={300}
          classNames={slideUpForm}
          unmountOnExit
        >
          <div className={styles.container}>
            <ContactForm />
          </div>
        </CSSTransition>

        <div className={styles.contacts}>
          {!!contacts.length && (
            <button
              type="button"
              onClick={() => handleClick(toggleOpen)}
              className={toggleClass}
            />
          )}
          <CSSTransition
            in={contacts.length > 2}
            timeout={250}
            classNames={slideUp}
            unmountOnExit
          >
            <div className={styles.container}>
              <h2 className={styles.title}>Contacts</h2>
              <Filter />
            </div>
          </CSSTransition>
        </div>

        <ContactsList />
      </div>
    </PhoneWrapper>
  );
};

export default App;

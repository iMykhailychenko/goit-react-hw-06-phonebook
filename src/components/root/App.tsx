import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

// impor components
import PhoneWrapper from '../../phone-wrapper/PhoneWrapper.styled';
import ContactForm from '../contact-form/ContactForm';
import ContactsList from '../contacts-list/ContactsList';
import Filter from '../filter/Filter';
import Notification from '../notification/Notification';
import Duplicate from '../render-props/Duplicate';

// import styles
import slideUp from '../../transitions/slideUp.module.css';
import alert from '../../transitions/alert.module.css';
import slideUpForm from '../../transitions/slideUpForm.module.css';
import styles from './App.module.css';
import '../../transitions/slideTitle.css';
import '../base.css';

// import utils
import { filterTasks } from '../../helpers/helpers';
import { IContact, IState } from '../../types';

interface Props extends IState {
  handleAddedContact(name: string, number: string): void;
  handleClick(toggleOpen: boolean): void;
  handleChanges(value: string): void;
  handleRemove(id: string): void;
}

const App: React.FC<Props> = ({
  contacts,
  filter,
  toggleOpen,
  handleAddedContact,
  handleClick,
  handleChanges,
  handleRemove,
}) => {
  const filteredTasks: IContact[] = filterTasks(contacts, filter);
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

        <Duplicate contacts={contacts} onAddedContact={handleAddedContact}>
          {({ isOpen, toggleAlert, onAddedContact, content }) => (
            <>
              <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={alert}
                unmountOnExit
              >
                <Notification
                  value={content}
                  title="Attention!"
                  onWarnning={toggleAlert}
                />
              </CSSTransition>

              <CSSTransition
                in={toggleOpen || !contacts.length}
                timeout={300}
                classNames={slideUpForm}
                unmountOnExit
              >
                <div className={styles.container}>
                  <ContactForm onAddedContact={onAddedContact} />
                </div>
              </CSSTransition>
            </>
          )}
        </Duplicate>

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
              <Filter value={filter} onFilterChanges={handleChanges} />
            </div>
          </CSSTransition>
        </div>

        <ContactsList
          isOpen={toggleOpen}
          contacts={filteredTasks}
          onRemove={handleRemove}
        />
      </div>
    </PhoneWrapper>
  );
};

export default App;

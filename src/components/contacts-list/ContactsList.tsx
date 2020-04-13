import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { IContact } from '../../types';
import { filterTasks } from '../../helpers/helpers';

// styles
import styles from './ContactsList.module.css';
import popTransition from '../../transitions/pop.module.css';

interface Props {
  contacts: IContact[];
  filter: string;
  toggleOpen: boolean;
  handleRemove(id: string): void;
}

const ContactsList: React.FC<Props> = ({ contacts, filter, handleRemove, toggleOpen }) => {
  const boxHeight = classNames({
    contactsListWrp: true,
    contactsListWrpOpen: !toggleOpen,
  });
  const filteredContacts = filterTasks(contacts, filter)

  return (
    <div className={boxHeight}>
      <TransitionGroup component="ul" className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={popTransition}>
            <li className={styles.item} key={id}>
              <div>
                <span>{`${name}: `}</span>
                <span>{`${number}`}</span>
              </div>
              <button
                className={styles.btn}
                onClick={() => handleRemove(id)}
                type="button"
              >
                &#10005;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ContactsList;

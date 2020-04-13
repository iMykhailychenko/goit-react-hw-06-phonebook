import React, { ChangeEvent } from 'react';
import styles from '../contact-form/ContactForm.module.css';
import stylesFilter from './Filter.module.css';

interface Props {
  filter: string;
  onFilterChanges(filter: string): void;
}

const Filter: React.FC<Props> = ({ filter, onFilterChanges }) => (
  <label>
    <span className="subtitle">Find contacts by name</span>
    <div className={stylesFilter.wrp}>
      <input
        className={styles.input}
        type="input"
        name="filter"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onFilterChanges(event.currentTarget.value)
        }
        autoComplete="off"
      />
    </div>
  </label>
);

export default Filter;

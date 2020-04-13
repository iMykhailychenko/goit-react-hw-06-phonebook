import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';
import { IContact } from '../../types';

const validName: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const validNumber: RegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

interface Props {
  contacts: IContact[];
  alert: boolean;
  handleAddedContact(
    name: string,
    number: string,
    contacts: IContact[],
    alert: boolean,
  ): void;
}

interface Values {
  name?: string;
  number?: string;
}

const ContactForm: React.FC<Props> = ({
  contacts,
  alert,
  handleAddedContact,
}) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={(values: Values): Values => {
        const errors: Values = {};
        if (!values.name) errors.name = 'This is required field';
        if (!values.number) errors.number = 'This is required field';
        if (!validName.test(values.name!)) errors.name = 'Invalid name';
        if (!validNumber.test(values.number!)) errors.number = 'Invalid number';
        return errors;
      }}
      onSubmit={values =>
        handleAddedContact(values.name, values.number, contacts, alert)
      }
    >
      {() => (
        <Form>
          <label className={styles.label}>
            <span className="subtitle">Name</span>
            <Field
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter the contact name..."
              autoComplete="off"
            />
            <ErrorMessage
              name="name"
              render={msg => <div className={styles.errors}>{msg}</div>}
            />
          </label>

          <label className={styles.label}>
            <span className="subtitle">Number</span>
            <Field
              className={styles.input}
              type="tel"
              name="number"
              placeholder="Enter the number..."
              autoComplete="off"
            />
            <ErrorMessage
              name="number"
              render={msg => <div className={styles.errors}>{msg}</div>}
            />
          </label>

          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

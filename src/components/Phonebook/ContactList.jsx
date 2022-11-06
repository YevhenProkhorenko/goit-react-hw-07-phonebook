import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import css from '../Phonebook/Phonebook.module.scss';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normilizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact => {
      const normilizeName = contact.name.toLowerCase();

      const result = normilizeName.includes(normilizedFilter);

      return result;
    });
    return filteredContacts;
  };

  const filteredContactsList = filteredContacts();

  const elements = filteredContactsList.map(contact => {
    return (
      <li key={contact.id} className={css.contactList}>
        {contact.name}: {contact.number}
        <button
          className={(css.submitButton, css.deleteButton)}
          onClick={() => dispatch(removeContact(contact.id))}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul className={css.labelText}>{elements.length === 0 ? '' : elements}</ul>
    </div>
  );
}

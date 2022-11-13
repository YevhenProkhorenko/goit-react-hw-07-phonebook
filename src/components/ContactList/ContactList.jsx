import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from '../ContactList/ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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

  const deleteContact = id => {
    dispatch(removeContact(id))
    toast.info('Contact deleted')
  }

  const filteredContactsList = filteredContacts();

  const elements = filteredContactsList.map(contact => {
    return (
      <li key={contact.id} className={css.contactList}>
        {contact.name}: {contact.phone}
        <button
          className={(css.submitButton, css.deleteButton)}
          onClick={() => deleteContact(contact.id)}
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

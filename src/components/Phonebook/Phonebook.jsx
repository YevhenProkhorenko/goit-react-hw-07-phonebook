import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from '../Phonebook/Phonebook.module.scss';

import React from 'react';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <>
      <div className={css.mainWrapper}>
        <ContactForm />
      </div>
      <div>
        <h2 className={css.title}>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
    </>
  );
}

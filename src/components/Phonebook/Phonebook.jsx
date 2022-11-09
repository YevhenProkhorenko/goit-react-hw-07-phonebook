import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Filter from './Filter';
import css from '../Phonebook/Phonebook.module.scss';

import React from 'react';

export default function Phonebook() {
  return (
    <>
      <div className={css.mainWrapper}>
        <ContactForm />
      </div>
      <div>
        <h2 className={css.title}>Contacts</h2>
        {/* <Filter></Filter> */}
        <ContactList />
      </div>
    </>
  );
}

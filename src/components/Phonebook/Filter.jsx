import React from 'react';
import css from '../Phonebook/Phonebook.module.scss';
import { filterContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const searchContact = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };
  return (
    <div>
      <label className={(css.labelText, css.formFlex)}>
        Find contacts by name:
        <input
          className={css.inputStyles}
          type="text"
          name="filter"
          value={filter}
          onChange={searchContact}
        />
      </label>
    </div>
  );
}

import React from 'react';
import css from '../Filter/Filter.module.scss';
import { filterContacts } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const searchContact = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };
  return (
    <div>
      <label className={(css.labelText, css.filterFlex)}>
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

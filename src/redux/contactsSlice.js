import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(store, { payload }) {
      store.contacts.push(payload);
    },
    removeContact(store, { payload }) {
      store.contacts = store.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(store, { payload }) {
      store.filter = payload;
    },
  },
});
export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;

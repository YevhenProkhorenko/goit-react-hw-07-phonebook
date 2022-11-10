import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: ''
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(store, { payload }) {
      store.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.isLoading = true;
    },
     [fetchContacts.fulfilled]: (store, { payload}) => {
       store.isLoading = false;
       store.error = null;
       store.contacts = payload;
    },
    [fetchContacts.rejected]: (store, { payload}) => {
      store.isLoading = false;
      store.error = payload;
    },
    [addContact.pending]: (store) => {
      store.isLoading = true;
    },
     [addContact.fulfilled]: (store, { payload}) => {
       store.isLoading = false;
       store.error = null;
       store.contacts.push(payload);
    },
    [addContact.rejected]: (store, { payload}) => {
      store.isLoading = false;
      store.error = payload
    },

    [removeContact.pending]: (store) => {
      store.isLoading = true;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
       store.isLoading = false;
       store.error = null;
       const index = store.contacts.findIndex(contact => contact.id === payload.id);
      store.contacts.splice(index, 1);
    },
    [removeContact.rejected]: (store, { payload}) => {
      store.isLoading = false;
      store.error = payload
    }

  }
});
export const { filterContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;

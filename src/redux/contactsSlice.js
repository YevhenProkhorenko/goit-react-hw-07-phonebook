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
  // reducers: {
  //   // addContact(store, { payload }) {
  //   //   store.contacts.push(payload);
  //   // },
  //   // removeContact(store, { payload }) {
  //   //   store.contacts = store.contacts.filter(contact => contact.id !== payload);
  //   // },
  //   filterContacts(store, { payload }) {
  //     store.filter = payload;
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.loading = true;
    },
     [fetchContacts.fulfilled]: (store, { payload}) => {
       store.loading = false;
       store.contacts = payload
    },
    [fetchContacts.rejected]: (store, { payload}) => {
      store.loading = false;
      store.error = payload
    },
    [addContact.pending]: (store) => {
      store.loading = true;
    },
     [addContact.fulfilled]: (store, { payload}) => {
       store.loading = false;
       store.contacts.push(payload);
    },
    [addContact.rejected]: (store, { payload}) => {
      store.loading = false;
      store.error = payload
    },

    [removeContact.pending]: (store) => {
      store.loading = true;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
       store.loading = false;
       store.contacts = store.contacts.filter(contact => contact.id !== payload)
    },
    [removeContact.rejected]: (store, { payload}) => {
      store.loading = false;
      store.error = payload
    }

  }
});
// export const { filterContacts } =
//   contactsSlice.actions;
export default contactsSlice.reducer;
// export const { addContact, removeContact, filterContacts } =
//   contactsSlice.actions;

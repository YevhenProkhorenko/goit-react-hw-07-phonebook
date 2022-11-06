import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistContacts = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

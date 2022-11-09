import * as api from 'shared/api/contacts'
import { createAsyncThunk } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

const noDuplicates = (contacts) => {
    const result = contacts.find(
      item => item.name.toLowerCase() === item.name.toLowerCase()
    );
    return result;
  };

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkApi) => {
    try {
        const data = await api.getContacts();
        return data;
     }
    catch (error) {

        return thunkApi.rejectWithValue(error);
    }
})
export const addContact = createAsyncThunk('contacts/add', async (data, { rejectWithValue }) => {
    try {
        const result = await api.addContact(data);
        return result
    }
    catch (error) {
        return rejectWithValue(error)
    }
},
    {
        condition: (data, { getState }) => {
            // const { contacts } = getState();
            if (noDuplicates(data)) {
      return alert(`${data.name} is already in contacts.`);
    }
    }
    })

export const removeContact = createAsyncThunk('contacts/remove', async (id, { rejectWithValue }) => {
    try {
        await api.removeContact(id);
        return id;
    }
    catch (error) {
        return rejectWithValue(error);
    }
    })

// export const fetchContacts = () => {
//     try { 
//         const data = api.getContact();
//     } catch (error) {
//         console.log(error);
//     }
// }
// import * as api from 'shared/api/contacts'
import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
axios.defaults.baseURL = 'https://6367ba1bedc85dbc84da567f.mockapi.io/api/contacts'

// const noDuplicates = (contacts) => {
//     const result = contacts.find(
//       item => item.name.toLowerCase() === item.name.toLowerCase()
//     );
//     return result;
//   };

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkApi) => {
    try {
        const result = await axios.get('/');
        return result.data;
     }
    catch (error) {

        return thunkApi.rejectWithValue(error);
    }
})
export const addContact = createAsyncThunk('contacts/add', async (data, thunkApi) => {
    try {
        const result = await axios.post(data);
        return result.data
    }
    catch (error) {
        return thunkApi.rejectWithValue(error)
    }
},
    // {
    //     condition: (data, { getState }) => {
    //         const { contacts } = getState();
    //         if (noDuplicates(data, contacts.contacts)) {
    //   return alert(`${data.name} is already in contacts.`);
    // }
    // }
    // }
)

export const removeContact = createAsyncThunk('contacts/remove', async (id, { rejectWithValue }) => {
    try {
        const result = await axios.delete(`/${id}`);
        return result.data;
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
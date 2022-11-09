import axios from "axios";

const instanceContacts = axios.create({
    baseURL: 'https://6367ba1bedc85dbc84da567f.mockapi.io/api/contacts'
})

export const getContacts = async () => {
    const { data } = await instanceContacts.get('/');
    return data;
}
export const addContact = async (data) => {
    const { data: result } = await instanceContacts.post('/', data);
    return result;
}
export const removeContact = async (id) => {
    const { data } = await instanceContacts.delete(`/${id}`);
    return data;
} 
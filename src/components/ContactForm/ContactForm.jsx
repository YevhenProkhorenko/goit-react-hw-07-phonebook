import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../ContactForm/ContactForm.module.scss';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const noDuplicates = ({ name }) => {
    const result = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    return result;
  };

  const addConctacts = data => {
    
    if (noDuplicates(data)) {
      return toast.warn(`${data.name} is already in contacts.`)      
    }
    toast.success('Contact added')
    dispatch(addContact({ ...data })) && setName('');
    setPhone('');;
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;      
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addConctacts({ name, phone });
    
  };

  return (
    <form className={css.formFlex} onSubmit={handleSubmit}>
      <label className={css.labelText}>
        Name        
      </label>
      <input
        className={css.inputStyles}        
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <div className={css.formFlex}>
        <label className={css.labelText}>
          Number          
        </label>
        <input
          className={css.inputStyles}          
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
      <ToastContainer autoClose={1000} theme="colored" />
    </form>
  );
}

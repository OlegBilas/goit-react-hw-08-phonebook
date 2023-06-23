import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Label, Input } from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export default function ContactForm() {
  const initialState = { name: '', number: '' };
  const [contact, setContact] = useState(initialState);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(({ name }) => name === contact.name)) {
      return toast.error(`${contact.name} is already in contacts`);
    }

    for (const el of e.target.elements) {
      const reg = new RegExp(el.pattern);
      if (!reg.test(el.value)) {
        return toast.error(el.title);
      }
    }
    dispatch(addContact({ name: contact.name, number: contact.number }));
    setContact(initialState);
  };

  const idName = nanoid();
  const idphone = nanoid();
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={idName}>Name</Label>
      <Input
        id={idName}
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <Label htmlFor={idphone}>Phone</Label>
      <Input
        id={idphone}
        type="tel"
        name="number"
        value={contact.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <button type="submit" disabled={!contact.name || !contact.number}>
        Add contact
      </button>
    </Form>
  );
}

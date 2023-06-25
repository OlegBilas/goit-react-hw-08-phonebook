import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Label, Input } from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { toast } from 'react-toastify';

export default function RegistrationForm() {
  const initialState = { name: '', email: '', password: '' };
  const [user, setUser] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = e => {
    setUser(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    dispatch(register(userData)).then(res => {
      if (res?.error) {
        toast.error(
          'Probably, you are registered with your login/password already. Or your email is wrong'
        );
      }
    });

    setUser(initialState);
    form.reset();
  };

  const idName = nanoid();
  const idMail = nanoid();
  const idPassword = nanoid();
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={idName}>Name</Label>
      <Input
        id={idName}
        type="text"
        name="name"
        value={user.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <Label htmlFor={idMail}>E-mail</Label>
      <Input
        id={idMail}
        type="email"
        name="email"
        value={user.email}
        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        title="It is not look like e-mail. At least, your e-mail have to contain symbol '@' inside"
        required
        onChange={handleChange}
      />

      <Label htmlFor={idPassword}>Password</Label>
      <Input
        id={idPassword}
        type="password"
        name="password"
        value={user.password}
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
        title="Password has to be from 6 to 20 characters, which contain at least one numeric digit, one uppercase and one lowercase letter (latin symbols)"
        required
        onChange={handleChange}
      />

      <button type="submit" disabled={!user.email || !user.password}>
        Register
      </button>
    </Form>
  );
}

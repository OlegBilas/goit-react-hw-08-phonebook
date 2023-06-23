import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Label, Input } from './LogInForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function LogInForm() {
  const initialState = { email: null, password: null };
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
    dispatch(logIn(userData));

    setUser(initialState);
    form.reset();
  };

  const idMail = nanoid();
  const idPassword = nanoid();
  return (
    <Form onSubmit={handleSubmit}>
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
        Log in
      </button>
    </Form>
  );
}

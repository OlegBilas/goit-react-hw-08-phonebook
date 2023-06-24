import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, TitlePhonebook, TitleContacts } from './Contacts.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

export function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (error) {
    toast.error(`Somethitg has went wrong. The reason is: ` + error);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <Wrapper>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {isLoading && <Loader />}
        {!isLoading && !error && <ContactList />}
      </Wrapper>
    </>
  );
}

import ContactList from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Contacts />
    </>
  );
}

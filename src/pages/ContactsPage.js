import { Contacts } from 'components/Contacts/Contacts';
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

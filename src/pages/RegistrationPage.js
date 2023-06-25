import { Helmet } from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { ToastContainer } from 'react-toastify';

export default function RegistrationPage() {
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}

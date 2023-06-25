import { Helmet } from 'react-helmet';
import LogInForm from 'components/LogInForm/LogInForm';
import { ToastContainer } from 'react-toastify';

export default function LoginPage() {
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogInForm />
    </div>
  );
}

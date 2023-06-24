import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { Header, Section } from './Layout.styled';
import Loader from '../Loader/Loader';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <main>
      <Header>
        <Navigation />
        {isLoggedIn && <UserMenu user={user.email} />}
      </Header>
      <Section>
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
}

export default Layout;

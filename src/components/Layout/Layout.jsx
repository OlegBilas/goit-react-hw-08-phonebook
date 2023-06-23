import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu user={user.email} />}
      </header>
      <Outlet />
    </>
  );
}

export default Layout;

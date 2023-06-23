import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink to="/contacts">Contatcs Book</NavLink>
      ) : (
        <div>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login ">Log In</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

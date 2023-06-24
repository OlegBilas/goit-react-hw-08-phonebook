import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink className={css.link} to="/contacts">
          Contatcs Book
        </NavLink>
      ) : (
        <div>
          <NavLink className={css.link} to="/register">
            Registration
          </NavLink>
          <NavLink className={css.link} to="/login ">
            Log In
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

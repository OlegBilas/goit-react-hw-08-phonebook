import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

function UserMenu({ email }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>`You are loggend in with e-mail ${email}`</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;

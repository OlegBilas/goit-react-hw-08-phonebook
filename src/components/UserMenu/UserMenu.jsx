import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

function UserMenu({ email }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{`You are loggend in with e-mail ${user.email}`}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;

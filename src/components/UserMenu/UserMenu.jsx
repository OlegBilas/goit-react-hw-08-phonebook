import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Username, Wrapper } from './UserMenu.styled';

function UserMenu({ email }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>{`Welcome, ${user.email}`}</Username>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </Wrapper>
  );
}

export default UserMenu;

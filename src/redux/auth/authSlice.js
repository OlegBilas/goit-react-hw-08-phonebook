import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from 'redux/auth/operations';

const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [register, logIn];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleUserLoggingFulfilled
      )
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected);
  },
});

function handleUserLoggingFulfilled(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

function handleLogOut(state) {
  state.user = { name: null, email: null, password: null };
  state.token = null;
  state.isLoggedIn = false;
}
function handleRefreshUserPending(state) {
  state.isRefreshing = true;
}

function handleRefreshUserFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

function handleRefreshUserRejected(state) {
  state.isRefreshing = false;
}

export const authReducer = authSlice.reducer;

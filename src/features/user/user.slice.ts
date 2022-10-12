import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUser } from './user.api';

export type IUser = {
  id: string;
  name: string;
};

type UserState = {
  user: IUser;
  loading: boolean;
};

const initialState: UserState = {
  user: { id: '', name: '' },
  loading: false,
};

export const loginAsync = createAsyncThunk('counter/fetchCount', async (user: IUser) => {
  const response = await fetchUser(user);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = true;
      });
  },
});

// console.log(userSlice);
// console.log(userSlice.actions.login({ id: '1', name: 'Auth' }));

export const selectUserId = (state: RootState) => state.auth.user;

export const { login } = userSlice.actions;

export const userReducer = userSlice.reducer;

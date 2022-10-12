import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import '../features/user/user.slice';
import { userReducer } from '../features/user/user.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

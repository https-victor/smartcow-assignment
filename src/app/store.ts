import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth-slice';
import libraryReducer from './features/library/library-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    library: libraryReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

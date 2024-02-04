import { configureStore } from '@reduxjs/toolkit';
import AddPersonSliceReducer from './slices/AddPersonSlice';
import userReducer from './slices/UserSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    AddPersonSlice: AddPersonSliceReducer,
    users: userReducer,
  },
});

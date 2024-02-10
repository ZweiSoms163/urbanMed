// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../store';
// import { User } from '../types';
// import { addUserToUserList } from './AddPersonSlice';

// interface UserState {
//   userList: User[];
//   loading: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null | undefined;
// }

// const initialState: UserState = {
//   userList: [],
//   loading: 'idle',
//   error: null,
// };

// export const fetchUsers = createAsyncThunk<User[], string, { rejectValue: string }>(
//   'users/fetchUsers',
//   async (seed, { rejectWithValue }) => {
//     if (!seed) {
//       console.error('Seed не найден');
//       return rejectWithValue('Seed не найден');
//     }

//     try {
//       const response = await axios.get(
//         `https://randomuser.me/api/?seed=${seed}&results=50&inc=gender,name,email`,
//       );
//       return response.data.results;
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       return rejectWithValue('Failed to fetch users');
//     }
//   },
// );
// const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = 'loading';
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = 'succeeded';
//         state.userList = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = 'failed';
//         state.error = action.payload ? action.payload : 'Failed to fetch users';
//         console.error('Error fetching users:', state.error);
//       })
//       .addCase(addUserToUserList, (state, action) => {
//         state.userList.unshift(action.payload);
//       });
//   },
// });

// export const selectUserList = (state: RootState) => state.users.userList;
// export const selectUserLoadingStatus = (state: RootState) => state.users.loading;
// export const selectUserError = (state: RootState) => state.users.error;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { User } from '../types';
import { addUserToUserList } from './AddPersonSlice';

interface UserState {
  userList: User[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: UserState = {
  userList: [],
  loading: 'idle',
  error: null,
};

const savedUsers = localStorage.getItem('users');
if (savedUsers) {
  initialState.userList = JSON.parse(savedUsers);
}

export const fetchUsers = createAsyncThunk<User[], string, { rejectValue: string }>(
  'users/fetchUsers',
  async (seed, { rejectWithValue }) => {
    if (!seed) {
      console.error('Seed не найден');
      return rejectWithValue('Seed не найден');
    }

    try {
      const response = await axios.get(
        `https://randomuser.me/api/?seed=${seed}&results=50&inc=gender,name,email`,
      );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching users:', error);
      return rejectWithValue('Failed to fetch users');
    }
  },
);
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeAllUsers: (state) => {
      state.userList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.userList = [...state.userList, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload ? action.payload : 'Failed to fetch users';
        console.error('Error fetching users:', state.error);
      })
      .addCase(addUserToUserList, (state, action) => {
        state.userList.unshift(action.payload);
      });
  },
});

export const selectUserList = (state: RootState) => state.users.userList;
export const selectUserLoadingStatus = (state: RootState) => state.users.loading;
export const selectUserError = (state: RootState) => state.users.error;
export const { removeAllUsers } = userSlice.actions;
export default userSlice.reducer;

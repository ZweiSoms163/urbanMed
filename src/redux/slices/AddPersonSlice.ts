// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { ModalState, User } from '../types';
// import { saveUsersToLocalStorage } from '../../untils/localStorage';

// const initialState: ModalState = {
//   isModalOpen: false,
//   isEditModalOpen: false,
//   editingUser: null,
//   formData: {
//     lastName: '',
//     firstName: '',
//     email: '',
//     gender: '',
//   },
//   errors: {
//     lastName: '',
//     firstName: '',
//     email: '',
//   },
//   users: [],
//   currentGender: '',
// };
// const AddPersonSlice = createSlice({
//   name: 'AddPersonSlice',
//   initialState,
//   reducers: {
//     openModal: (state) => {
//       state.isModalOpen = true;
//     },
//     closeModal: (state) => {
//       state.isModalOpen = false;
//       state.formData = initialState.formData;
//       state.errors = initialState.errors;
//     },
//     updateFormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     updateFormErrors: (state, action) => {
//       state.errors = { ...state.errors, ...action.payload };
//     },

//     //вынести функционал манипуляций над пользователем в одтдельный слайс по завершению доработки

//     addUser: (state, action) => {
//       const { gender } = action.payload;
//       const newUser: User = {
//         gender,
//         name: {
//           first: state.formData.firstName,
//           last: state.formData.lastName,
//         },
//         email: state.formData.email,
//         isNew: true,
//         id: '',
//       };
//       state.users.push(newUser);
//       state.currentGender = gender;
//     },
//     addUserToUserList: (state, action: PayloadAction<User>) => {
//       state.users.push(action.payload);
//       saveUsersToLocalStorage(state.users);
//     },
//     // вынести функционал редактирования пользователя
//     openEditModal: (state, action) => {
//       state.isEditModalOpen = true;
//       state.editingUser = action.payload;
//     },
//     closeEditModal: (state) => {
//       state.isEditModalOpen = false;
//       state.editingUser = null;
//     },
//     updateEditormData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     addEditUser: (state, action) => {
//       const { gender } = action.payload;
//       const newEditUser: User = {
//         gender,
//         name: {
//           first: '',
//           last: '',
//         },
//         email: '',
//         isNew: false,
//         id: '',
//       };
//       state.users.push(newEditUser);
//       state.currentGender = gender;
//     },
//     addEditUserToUerList: (state, action: PayloadAction<User>) => {
//       state.users.push(action.payload);
//       saveUsersToLocalStorage(state.users);
//     },
//     deleteEditUser: (state, action: PayloadAction<string>) => {
//       const userId = action.payload;
//       state.users = state.users.filter((user) => user.id.toString() !== userId);
//       saveUsersToLocalStorage(state.users);
//     },
//   },
// });

// export const {
//   openModal,
//   closeModal,
//   updateFormData,
//   updateFormErrors,
//   addUser,
//   addUserToUserList,
//   openEditModal,
//   closeEditModal,
//   updateEditormData,
//   addEditUserToUerList,
//   deleteEditUser,
// } = AddPersonSlice.actions;
// export default AddPersonSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalState, User } from '../types';
import { saveUsersToLocalStorage } from '../../untils/localStorage';

const initialState: ModalState = {
  isModalOpen: false,
  isEditModalOpen: false,
  editingUser: null,
  formData: {
    lastName: '',
    firstName: '',
    email: '',
    gender: '',
  },
  errors: {
    lastName: '',
    firstName: '',
    email: '',
  },
  users: [],
  currentGender: '',
};
const AddPersonSlice = createSlice({
  name: 'AddPersonSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.formData = initialState.formData;
      state.errors = initialState.errors;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    updateFormErrors: (state, action) => {
      state.errors = { ...state.errors, ...action.payload };
    },

    //вынести функционал манипуляций над пользователем в одтдельный слайс по завершению доработки

    addUser: (state, action) => {
      const { gender } = action.payload;
      const newUser: User = {
        gender,
        name: {
          first: state.formData.firstName,
          last: state.formData.lastName,
        },
        email: state.formData.email,
        isNew: true,
        id: '',
      };
      state.users.push(newUser);
      state.currentGender = gender;
    },
    addUserToUserList: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      state.users.push(action.payload);
      saveUsersToLocalStorage(state.users);
    },
    // вынести функционал редактирования пользователя
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.editingUser = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editingUser = null;
    },
    updateEditormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addEditUser: (state, action) => {
      const { gender } = action.payload;
      const newEditUser: User = {
        gender,
        name: {
          first: '',
          last: '',
        },
        email: '',
        isNew: false,
        id: '',
      };
      state.users.push(newEditUser);
      state.currentGender = gender;
    },
    addEditUserToUerList: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      saveUsersToLocalStorage(state.users);
    },
    deleteEditUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id.toString() !== userId);
      saveUsersToLocalStorage(state.users);
    },
  },
});

export const {
  openModal,
  closeModal,
  updateFormData,
  updateFormErrors,
  addUser,
  addUserToUserList,
  openEditModal,
  closeEditModal,
  updateEditormData,
  addEditUserToUerList,
  deleteEditUser,
} = AddPersonSlice.actions;
export default AddPersonSlice.reducer;

// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { ModalState, User } from '../types';
// import { saveUsersToLocalStorage } from '../../untils/localStorage';

// const initialState: ModalState = {
//   isModalOpen: false,
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
//           title: '',
//           first: state.formData.firstName,
//           last: state.formData.lastName,
//         },
//         email: state.formData.email,
//         isNew: true,
//       };
//       state.users.push(newUser);
//       state.currentGender = gender;
//     },
//     addUserToUserList: (state, action: PayloadAction<User>) => {
//       state.users.push(action.payload);
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
// } = AddPersonSlice.actions;
// export default AddPersonSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalState, User } from '../types';
import { saveUsersToLocalStorage } from '../../untils/localStorage';

const initialState: ModalState = {
  isModalOpen: false,
  isEditModalOpen: false,
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

    // вынести в слайс с функционалом редактирования пользователя
    openEditModal: (state) => {
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
    },

    //вынести функционал манипуляций над пользователем в одтдельный слайс по завершению доработки

    addUser: (state, action) => {
      const { gender } = action.payload;
      const newUser: User = {
        gender,
        name: {
          title: '',
          first: state.formData.firstName,
          last: state.formData.lastName,
        },
        email: state.formData.email,
        isNew: true,
      };
      state.users.push(newUser);
      state.currentGender = gender;
    },
    addUserToUserList: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
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
} = AddPersonSlice.actions;
export default AddPersonSlice.reducer;

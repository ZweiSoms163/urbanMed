import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from '../types';

const initialState: ModalState = {
  isModalOpen: false,
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
    },
  },
});

export const { openModal, closeModal } = AddPersonSlice.actions;
export default AddPersonSlice.reducer;

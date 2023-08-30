import { createSlice } from "@reduxjs/toolkit";

interface ModalStateProps {
  value: boolean;
}

const initialState: ModalStateProps = {
  value: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});
export const { openModal, closeModal } = modal.actions;
export default modal.reducer;

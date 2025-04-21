import modalSlice from "./slice";
import { selectModalIsOpen } from "./selectors";

// Extract actions and reducer from the modal slice
const { openModal, closeModal } = modalSlice.actions;
const modalReducer = modalSlice.reducer;

export {
    // Actions
    openModal,
    closeModal,
    // Selectors
    selectModalIsOpen,
};

// export the reducer as default
export default modalReducer;
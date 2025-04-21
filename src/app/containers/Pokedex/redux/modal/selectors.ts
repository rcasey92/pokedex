import { createSelector } from "@reduxjs/toolkit";

const selectModalIsOpen = createSelector(
    (state) => state.modal,
    (modalState) => modalState.isOpen,
);

export { selectModalIsOpen };
import type { ModalReducerType } from "./types";


const modalReducer: ModalReducerType = {
    openModal: (state) => {
        state.isOpen = true;
    },
    closeModal: (state) => {
        state.isOpen = false;
    },
}

export default modalReducer;
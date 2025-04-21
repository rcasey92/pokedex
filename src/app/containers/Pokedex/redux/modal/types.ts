import { ActionWithPayload } from "@redux/store";

type ModalState = {
    isOpen: boolean;
}

type ModalReducerType = {
    openModal: ActionWithPayload<ModalState, void>;
    closeModal: ActionWithPayload<ModalState, void>;
}

export type { ModalState, ModalReducerType };
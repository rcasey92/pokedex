import { createSlice } from '@reduxjs/toolkit';

import initialModalState from './initialState';
import modalReducer from './reducer';

const modalSlice = createSlice({
    name: 'modalState',
    initialState: initialModalState,
    reducers: modalReducer,
});

export default modalSlice;



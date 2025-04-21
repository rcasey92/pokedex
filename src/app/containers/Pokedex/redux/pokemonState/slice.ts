import { createSlice } from '@reduxjs/toolkit';
import initialPokemonState from './initialState';
import pokemonReducer from './reducer';

const pokemonSlice = createSlice({
    name: 'pokemonState',
    initialState: initialPokemonState,
    reducers: pokemonReducer,
})

export default pokemonSlice;
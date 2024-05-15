import { createSlice, createSelector } from "@reduxjs/toolkit";

interface PokemonState {
  id: string;
}

const initialState: PokemonState = {
  id: "0",
};

const pokemonSlice = createSlice({
  name: "pokemonState",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    resetId: (state) => {
      state.id = initialState.id;
    },
  },
});

// extract actions
const { setId, resetId } = pokemonSlice.actions;
// create selectors
const selectId = createSelector(
  (state) => state.pokemonState,
  (pokemonState) => pokemonState.id
);

export { setId, resetId, selectId };

export default pokemonSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { VALUE_BUCKETS_BY_INDEX } from './constants'

interface PokemonState {
  id: string;
  highlightedInput: number
}

const initialState: PokemonState = {
  id: "0",
  highlightedInput: 3,
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
    moveFocusToTheRight: (state) => {
      state.highlightedInput = state.highlightedInput < 3 ? state.highlightedInput + 1 : 3;
    },
    moveFocusToTheLeft: (state) => {
      state.highlightedInput = state.highlightedInput > 0 ? state.highlightedInput - 1 : 0;
    },
    updateIdByControl: (state, action) => {
      const currentId = Number(state.id)
      const valueKey = state.highlightedInput.toString()
      const changeValue = VALUE_BUCKETS_BY_INDEX[valueKey]

      if (action.payload === 'ADD') {
        const newId = currentId + changeValue
        state.id = newId > 9999 ? '9999' : newId.toString()
      } else {
        const newId = currentId - changeValue
        state.id = newId < 0 ? '0' : newId.toString()
      }
    }
  },
});

// extract actions
const {
  setId,
  resetId,
  moveFocusToTheRight,
  moveFocusToTheLeft,
  updateIdByControl
} = pokemonSlice.actions;
// create selectors
const selectId = createSelector(
  (state) => state.pokemonState,
  (pokemonState) => pokemonState.id
);

const selectHighlightedIndex = createSelector(
  (state) => state.pokemonState,
  (pokemonState) => pokemonState.highlightedInput
);

export {
  setId,
  resetId,
  moveFocusToTheRight,
  moveFocusToTheLeft,
  updateIdByControl,
  selectId,
  selectHighlightedIndex
};

export default pokemonSlice.reducer;

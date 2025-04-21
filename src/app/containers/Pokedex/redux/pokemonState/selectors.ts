import { createSelector } from "@reduxjs/toolkit";

const selectId = createSelector(
    (state) => state.pokemonState,
    (pokemonState) => pokemonState.id
);
  
const selectHighlightedIndex = createSelector(
    (state) => state.pokemonState,
    (pokemonState) => pokemonState.highlightedInput
);

export {
    selectId,
    selectHighlightedIndex
};
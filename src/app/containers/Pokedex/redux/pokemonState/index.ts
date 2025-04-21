import pokemonSlice from "./slice";
import { selectId, selectHighlightedIndex } from "./selectors";

const {  
    setId,
    resetId,
    moveFocusToTheRight,
    moveFocusToTheLeft,
    updateIdByControl
} = pokemonSlice.actions;
const pokemonReducer = pokemonSlice.reducer;

export {
    // Actions
    setId,
    resetId,
    moveFocusToTheRight,
    moveFocusToTheLeft,
    updateIdByControl,
    // Selectors
    selectId,
    selectHighlightedIndex
};

// export the reducer as default
export default pokemonReducer;
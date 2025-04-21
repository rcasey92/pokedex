import initialPokemonState from './initialState';
import { VALUE_BUCKETS_BY_INDEX, ADD } from './constants';

import type { PokemonReducerType } from './types';

const pokemonReducer: PokemonReducerType = {
    setId: (state, action) => {
        state.id = action.payload;
    },
    resetId: (state) => {
        state.id = initialPokemonState.id;
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
    
        if (action.payload === ADD) {
            const newId = currentId + changeValue
            state.id = newId > 1025 ? '1025' : newId.toString()
        } else {
            const newId = currentId - changeValue
            state.id = newId < 0 ? '0' : newId.toString()
        }
    }
}

export default pokemonReducer;
import { ActionWithPayload } from "@redux/store"

type PokemonState = {
    id: string;
    highlightedInput: number;
}

// Explicitly define the action types to avoid type errors when calling actions without payloads
type PokemonReducerType = {
    setId: ActionWithPayload<PokemonState, string>;
    resetId: ActionWithPayload<PokemonState, void>;
    moveFocusToTheRight: ActionWithPayload<PokemonState, void>;
    moveFocusToTheLeft: ActionWithPayload<PokemonState, void>;
    updateIdByControl: ActionWithPayload<PokemonState, string>;
}

export type { PokemonState, PokemonReducerType };
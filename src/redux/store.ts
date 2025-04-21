import { configureStore, PayloadAction } from "@reduxjs/toolkit";

// api reducers
import { pokemonApi } from "../app/containers/Pokedex/redux/api";
// base redux reducers
import pokemonReducer from "../app/containers/Pokedex/redux/pokemonState";
import modalReducer from "../app/containers/Pokedex/redux/modal";

export const makeStore = () => configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemonState: pokemonReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// ActionWithPayload with typed state and payload
export type  ActionWithPayload<S, T> = (state: S, action: PayloadAction<T>) => void
import { configureStore } from "@reduxjs/toolkit";

import { pokemonApi } from "../app/containers/Pokedex/redux/api";
import pokemonSlice from "../app/containers/Pokedex/redux/pokemonState";

export const makeStore = () => {
  console.log(pokemonSlice);
  return configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      pokemonState: pokemonSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

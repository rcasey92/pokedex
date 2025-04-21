// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<string, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonSpeciesByName: builder.query<string, string>({
      query: name => `pokemon-species/${name}`,
    }),
    getPokemonTypeById: builder.query<string, string>({
      query: (id) => `type/${id}`,
    }),
  }),
})

// Export auto generated hooks for usage in functional components
export const {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesByNameQuery,
  useGetPokemonTypeByIdQuery
} = pokemonApi
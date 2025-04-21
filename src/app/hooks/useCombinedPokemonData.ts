import {
    useGetPokemonByNameQuery,
    useGetPokemonSpeciesByNameQuery
} from "@app/containers/Pokedex/redux/api";

/**
 *
 * @param id - The unique identifier (name or ID) of the Pokémon to fetch data for.
 * @returns An object containing:
 * - `combinedData`: An object with `pokemon` and `species` properties, 
 * - `isLoading`: A boolean indicating whether either of the queries is still loading.
 * - `error`: An error object if either of the queries encountered an error, or `undefined` if no errors occurred.
 */
const useCombinedPokemonData = (id: string) => {
    const {
        data: speciesData,
        error: speciesError,
        isLoading: speciesIsLoading
    } = useGetPokemonSpeciesByNameQuery(id);
    const {
        data: baseData,
        error: baseError,
        isLoading: baseIsLoading 
    } = useGetPokemonByNameQuery(id);

    // Combine the data from both queries with null fallbacks
    const combinedData = {
        pokemon: baseData || null,
        species: speciesData || null
    };

    // create derived loading and error states
    const isLoading = speciesIsLoading || baseIsLoading;
    const error = speciesError || baseError;

    return { combinedData, isLoading, error };
};

export default useCombinedPokemonData;
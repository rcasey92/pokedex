import { pokemonApi } from "../api";
import { useSelector } from "react-redux";

const usePokemonById = (id: number) => {
    const pokemon = useSelector(state => {
        return Object.keys(state?.pokemonApi?.queries)
    });
    console.log(pokemon)
    return pokemon;
};

export default usePokemonById;
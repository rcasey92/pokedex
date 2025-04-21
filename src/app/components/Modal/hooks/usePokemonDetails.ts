import { useMemo } from 'react';

type Genera = {
    genus: string;
    language: {
        name: string;
        url: string;
    }
}

type FlavorText = {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    }
}

type PokemonDetails = {
    genera: Genera[];
    flavor_text_entries: FlavorText[];
    isLoading: boolean;
    error: string | null;
}

type EnglishDetails = {
    englishGenera: string;
    englishFlavourText: string;
}

const usePokemonDetails = (species: PokemonDetails): EnglishDetails => {
    const { genera, flavor_text_entries } = species;

    const englishGenera = useMemo(() => {
        return genera?.find(g => g.language.name === "en")?.genus || "";
    }, [genera]);

    const englishFlavourText = useMemo(() => {
        return flavor_text_entries?.find(entry => entry.language.name === "en")?.flavor_text || "";
    }, [flavor_text_entries]);

    return { englishGenera, englishFlavourText };
};

export default usePokemonDetails;
import { capitalizeFirstLetter } from "@/app/utils";

type PokemonStat = {
    base_stat: number;
    stat: {
        name: string;
    };
}

type PokemonStats = PokemonStat[];

type ReturnedStats = {
    statValues: Record<string, number>;
    height: number;
    weight: number;
}

const SP_ATTACK: string = 'special-attack';
const SP_DEFENSE: string  = 'special-defense';

const replacementText: Record<string, string> = {
    [SP_ATTACK]: 'Sp. Atk',
    [SP_DEFENSE]: 'Sp. Def'
}

/**
 * @function usePokemonStats
 * @description Custom hook to transform Pokemon stats into a more usable format.
 *
 * @returns {ReturnedStats} - An object containing the transformed stats, height, and weight.
 */
const usePokemonStats = ({
    stats,
    height,
    weight 
}: {
    stats: PokemonStats,
    height: number,
    weight: number 
}): ReturnedStats => {
    const statValues = stats?.reduce((acc: Record<string, number>, stat: PokemonStat) => {
        const statName = replacementText[stat.stat.name]
            ? replacementText[stat.stat.name]
            : capitalizeFirstLetter(stat.stat.name);
        const statValue = stat.base_stat;

        acc[statName] = statValue;
        
        return acc;
    }, {})

    return {
        statValues,
        height,
        weight
    }
}

export default usePokemonStats;
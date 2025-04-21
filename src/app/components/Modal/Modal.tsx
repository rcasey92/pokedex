import { useMemo, useRef, useEffect } from "react";
import Image from "next/image";

import { closeModal } from "@app/containers/Pokedex/redux/modal";
import { selectId } from "@app/containers/Pokedex/redux/pokemonState";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useCombinedPokemonData } from "@app/hooks";
import { capitalizeFirstLetter } from "@app/utils";

import { usePokemonStats, usePokemonDetails } from "./hooks";
import { StatItem, TypesContainer} from './components';

import styles from './styles.module.css';

/**
 * @component Modal
 * @description Modal component that displays information about a Pokemon.
 * Fetches data from the PokeAPI using the provided id and displays it.
 * 
 * @returns {JSX.Element}
 */
const Modal = (): JSX.Element => {
    const modalRef = useRef<HTMLDivElement>(null);
    const selectedId = useAppSelector(selectId);
    const dispatch = useAppDispatch();

    
    const { combinedData, isLoading, error } = useCombinedPokemonData(selectedId);
    const { pokemon, species } = combinedData;
    // this is a work around until a type is created for the different API responses
    
    const castPokemon = useMemo(() => {
       if (!pokemon) {
            return {
                name: "",
                sprites: {
                    front_default: "",
                },
                stats: [],
                types: [],
                height: 0,
                weight: 0,
            }
        }
        
        return pokemon as any
    }, [pokemon]);

    const castSpecies = useMemo(() => {
        if(!species) {
            return {
                genera: [],
                flavor_text_entries: [],
            }
        }

        return species as any
    }, [species]);
    
    const { statValues, height, weight } = usePokemonStats(castPokemon);
    const { englishGenera, englishFlavourText } = usePokemonDetails(castSpecies);
    const types = castPokemon.types.map((type: { type: { name: string } }) => type.type.name);

    const sprite_url: string = castPokemon.sprites.front_default;

    useEffect(() => {
        const abortController = new AbortController();
        
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch(closeModal());
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                dispatch(closeModal());
            }
        };

        document.addEventListener("keydown", handleKeyDown, { signal: abortController.signal });
        document.addEventListener("mousedown", handleClickOutside, { signal: abortController.signal });
        
        // clean up the event listeners on component unmount
        return () => {
            abortController.abort();
        };
    }, [])

    // This modal could be opened/closed using a dialog tag and the dialog API
    return <div className={styles.modalContainer}>
        <div className={styles.modal} ref={modalRef}>
            <section>
                <h1 className={styles.modalHeader}>
                    {`#${selectedId}: ${capitalizeFirstLetter((castPokemon).name)} (${englishGenera})`}
                </h1>
            </section>
            <section className={styles.modalBody}>
                <p className={styles.description}>
                    {englishFlavourText}
                </p>
                <div className={styles.spriteContainer}>
                    <Image
                        height={225}
                        width={225}
                        className={styles.spriteImage}
                        alt="${data.name}"
                        src={sprite_url}
                    />
                    <TypesContainer types={types} />
                </div>
                <div className={styles.statsContainer}>
                    {/* types */}
                    <div className={styles.basicStats}>
                        <h3 className={styles.statTitle}>Basic Stats</h3>
                        <StatItem title="Height" value={`${height / 10} meters`} />
                        <StatItem title="Weight" value={`${weight} lbs`} />
                    </div>
                    <div className={styles.combatStats}>
                        <h3 className={styles.statTitle}>Combat Stats</h3>
                        <div className={styles.statGrid}>
                            {Object.entries(statValues).map(([key, value]) => (
                                <StatItem key={key} title={key} value={value}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>       
    </div>
}

export default Modal;

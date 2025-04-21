import React from "react";

import Image from "next/image";
import pokeball from "@public/pokeball-icon.png";
import { useGetPokemonByNameQuery } from "@app/containers/Pokedex/redux/api";

import styles from "./styles.module.css";

interface PreviewScreenProps {
  id: number;
  previewType: "next" | "previous";
}

/**
 * @component PreviewScreen 
 * @description PreviewScreen component that displays a preview of the next or previous Pokémon.
 * 
 * @returns {JSX.Element} A div containing the Pokémon image or a loading indicator.
 */
const PreviewScreen = ({ id, previewType }: PreviewScreenProps): JSX.Element => {
  const previewId = previewType === "next" ? id + 1 : id - 1;
  const queryId = previewId.toString()
  // TODO: make dynamic typings for this
  const { data, isLoading } = useGetPokemonByNameQuery(queryId, {
    skip: previewId <= 0 || previewId > 1025,
  });

  const setSprite = (data: any) => data ? data.sprites.front_default : null;

  return (
    <div className={styles.typeScreen}>
      {isLoading ? (
        <div className={styles.loadingText}>Loading...</div>
      ) : (
        <Image
          height={48}
          width={48}
          className={styles.imageContainer}
          alt={data ? (data as any).name : "pokeball"}
          src={id === 0 || previewId === 0 ? pokeball : setSprite(data)}
        />
      )}
    </div>
  );
};

export default PreviewScreen;

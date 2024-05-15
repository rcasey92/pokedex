import React, { FC } from "react";

import Image from "next/image";
import pokeball from "../../../../../../../../public/pokeball-icon.png";
import { useGetPokemonByNameQuery } from "../../../../redux/api";

import "./styles.css";

interface PreviewScreenProps {
  id: number;
  previewType: "next" | "previous";
}

const PreviewScreen: FC<PreviewScreenProps> = ({ id, previewType }) => {
  const previewId = previewType === "next" ? id + 1 : id - 1;
  const { data, isLoading } = useGetPokemonByNameQuery(previewId.toString());

  const setSprite = (data: any) => {
    if (data) {
      return data.sprites.front_default;
    }
    return null;
  };

  return (
    <div className="typeScreen">
      {isLoading ? (
        <div className="loadingText">Loading...</div>
      ) : (
        <Image
          height={48}
          width={48}
          className="imageContainer"
          alt={data?.name || "pokeball"}
          src={id === 0 || previewId === 0 ? pokeball : setSprite(data)}
        />
      )}
    </div>
  );
};

export default PreviewScreen;

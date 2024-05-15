import React, { FC, useState, useEffect } from "react";
import { TextDisplayScreen, IdInputButtons } from "./components";
import PillButton from "../../../../components/PillButton";
import { useGetPokemonByNameQuery } from "../../redux/api";
import Image from "next/image";
import { selectId, setId, resetId } from "../../redux/pokemonState";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import pokeball from "../../../../../../public/pokeball-icon.png";

import "./styles.css";

const RightSide: FC<any> = () => {
  const [inputId, setInputId] = useState<string>("");
  const dispatch = useAppDispatch();
  const currentId = useAppSelector(selectId);

  const prevId = Number(currentId) - 1;
  const nextId = Number(currentId) + 1;

  const { data: previousPokemonData, isLoading: prevLoading } =
    useGetPokemonByNameQuery(prevId.toString());
  const { data: nextPokemonData, isLoading: nextLoading } =
    useGetPokemonByNameQuery(nextId.toString());

  const setSprite = (data: any) => {
    if (data) {
      return data.sprites.front_default;
    }
    return null;
  };

  useEffect(() => {
    if (currentId === "0") {
      setInputId("");
    }
  }, [currentId]);

  const displayArray =
    inputId !== ""
      ? inputId.slice(0, 4).padStart(4, "0").split("")
      : [0, 0, 0, 0];

  return (
    <section className="rightSideContainer">
      <TextDisplayScreen />
      <IdInputButtons inputId={inputId} updateId={setInputId} />
      <div className="actionButtons">
        <PillButton
          className="buttonBackground"
          onClick={() => {
            dispatch(resetId());
            setInputId("");
          }}
          label={"reset input id"}
        />
        <PillButton
          className="buttonBackground"
          onClick={() => {
            dispatch(setId(inputId));
            setInputId("");
          }}
          label={"submit input id"}
        />
      </div>
      <div className="inputDisplay">
        {displayArray.map((value: string | number, index: number) => (
          <span key={`value_display_${value}_${index}`} className="inputCell">
            {value.toString()}
          </span>
        ))}
      </div>
      <svg className="indicatorLight">
        <defs>
          <filter
            id="indicator-shadow"
            x="-40%"
            y="-40%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.25" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.75" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#indicator-shadow)">
          <circle cx={337.5} cy={17} r={15.75} fill="#fed363" />
          <circle cx={337.5} cy={17} r={15} fill="#f3f750" />
          <circle cx={332} cy={10} r={3} fill="#fff" />
        </g>
      </svg>
      <div className="typeContainer">
        <div className="typeScreen">
          {prevLoading ? (
            <div className="loadingText">Loading...</div>
          ) : (
            <Image
              height={48}
              width={48}
              className="imageContainer"
              alt={previousPokemonData?.name}
              src={
                currentId === "0" || prevId === 0
                  ? pokeball
                  : setSprite(previousPokemonData)
              }
            />
          )}
        </div>
        <div className="typeScreen">
          {nextLoading ? (
            <div className="loadingText">Loading...</div>
          ) : (
            <Image
              height={48}
              width={48}
              className="imageContainer"
              alt={nextPokemonData?.name}
              src={
                currentId === "0" || nextId === 0
                  ? pokeball
                  : setSprite(nextPokemonData)
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default RightSide;

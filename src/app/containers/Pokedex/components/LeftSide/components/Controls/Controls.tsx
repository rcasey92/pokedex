import React from "react";

import { useAppSelector } from "@/redux/hooks";
import { selectId } from "@/app/containers/Pokedex/redux/pokemonState";
import { PillButton, ControlPad, CircularShadow } from "@/app/components";

import "./styles.css";

const Controls = () => {
  const currentId: string = useAppSelector(selectId);

  const displayArray =
    currentId !== ""
      ? currentId.slice(0, 4).padStart(4, "0").split("")
      : [0, 0, 0, 0];

  return (
    <section className="controlGrid">
      <div>
        <CircularShadow
          className="controlButton"
          id="control-shadow"
          label="decorative indicator lights"
        >
          <circle
            filter="url(#control-shadow)"
            fill="#505050"
            cx={70}
            cy={32.5}
            r={17}
          />
        </CircularShadow>
        <div className="buttonGroup">
          <PillButton className="redButton" tabIndex={-1} />
          <PillButton className="blueButton" tabIndex={-1} />
        </div>
      </div>
      <svg className="speakerDots" aria-label="speaker dots">
        <circle fill="#000" cx={35} cy={47.5} r={3.5} />
        <circle fill="#000" cx={60} cy={47.5} r={3.5} />
      </svg>
      <div
        className="currentPokemonIdScreen"
        aria-label={`the current id is ${currentId}`}
      >
        {displayArray.map((value: string | number, index: number) => (
          <span
            aria-hidden
            key={`display_digit_${index}`}
            className="numberContainer"
          >
            {value.toString()}
          </span>
        ))}
      </div>
      <ControlPad />
      <svg className="speakerDots bottomSpeakerDots" aria-label="speaker dots">
        <circle fill="#000" cx={215} cy={4} r={3.5} />
        <rect
          height={3}
          width={10}
          x={226}
          y={2.5}
          rx={1.5}
          ry={1.5}
          fill="#000"
        />
        <circle fill="#000" cx={244} cy={4} r={1.75} />
        <rect
          height={3}
          width={10}
          x={252}
          y={2.5}
          rx={1.5}
          ry={1.5}
          fill="#000"
        />
      </svg>
    </section>
  );
};

export default Controls;

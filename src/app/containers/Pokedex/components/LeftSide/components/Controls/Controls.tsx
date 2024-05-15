import React from "react";

import { useGetPokemonByNameQuery } from "../../../../redux/api";
import { useAppSelector } from "@/redux/hooks";
import { selectId } from "../../../../redux/pokemonState";

import PillButton from "../../../../../../components/PillButton";

import "./styles.css";

const Controls = () => {
  const currentId: string = useAppSelector(selectId);
  const { data, error, isLoading } = useGetPokemonByNameQuery(currentId);

  const displayArray =
    currentId !== ""
      ? currentId.slice(0, 4).padStart(4, "0").split("")
      : [0, 0, 0, 0];

  return (
    <section className="controlGrid">
      <div>
        <svg className="controlButton">
          <defs>
            <filter
              id="control-shadow"
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
          <circle
            filter="url(#control-shadow)"
            fill="#505050"
            cx={70}
            cy={32.5}
            r={17}
          />
        </svg>
        <div className="buttonGroup">
          <PillButton label={"blah"} className="redButton" />
          <PillButton label={"blah"} className="blueButton" />
        </div>
      </div>
      <svg className="speakerDots">
        <circle fill="#000" cx={35} cy={47.5} r={3.5} />
        <circle fill="#000" cx={60} cy={47.5} r={3.5} />
      </svg>
      <div className="currentPokemonIdScreen">
        {displayArray.map((value: string | number, index: number) => (
          <span key={`display_digit_${index}`} className="numberContainer">
            {value.toString()}
          </span>
        ))}
      </div>

      <div className="controlPadContainer">
        <button className="control up">Up</button>
        <button className="control right">Right</button>
        <span className="control center">
          <svg className="centerDot">
            <circle cx={19} cy={19} r={4} />
          </svg>
        </span>
        <button className="control down">Down</button>
        <button className="control left">Left</button>
      </div>
      <svg className="speakerDots bottomSpeakerDots">
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

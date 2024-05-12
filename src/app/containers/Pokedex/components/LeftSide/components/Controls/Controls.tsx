import React from "react";

import PillButton from "../../../../../../components/PillButton";

import "./styles.css";

const Controls = () => {
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
      <svg className="leftSpeakerDots">
        <circle fill="#000" cx={35} cy={47.5} r={3.5} />
        <circle fill="#000" cx={60} cy={47.5} r={3.5} />
      </svg>
      <div className="currentPokemonIdScreen">
        <span className="numberContainer">1</span>
        <span className="numberContainer">1</span>
        <span className="numberContainer">1</span>
        <span className="numberContainer">1</span>
      </div>

      <div className="controlPadContainer">
        <button className="control up">Up</button>
        <button className="control right">Right</button>
        <button className="control center" />
        <button className="control down">Down</button>
        <button className="control left">Left</button>
      </div>
    </section>
  );
};

export default Controls;

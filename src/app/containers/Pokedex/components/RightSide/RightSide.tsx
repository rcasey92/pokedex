import React, { FC } from "react";
import { TextDisplayScreen, IdInputButtons } from "./components";
import PillButton from "../../../../components/PillButton";

import "./styles.css";

const RightSide: FC<any> = () => {
  const test = 15
  const testArray = test.toString().padStart(4, '0').split("")
  return (
    <section className="rightSideContainer">
      <TextDisplayScreen />
      <IdInputButtons />
      <div className="actionButtons">
        <PillButton className="buttonBackground"/>
        <PillButton className="buttonBackground"/>
      </div>
      <div className="inputDisplay">{testArray.map(value => <span className="inputCell">{value}</span>)}</div>
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
          <circle cx={337.5} cy={17} r={15.75} fill="#fed363"/>
          <circle cx={337.5} cy={17} r={15} fill="#f3f750"/>
          <circle cx={332} cy={10} r={3} fill="#fff"/>
        </g>
      </svg>
      <div className="typeContainer">
        <div className="typeScreen" />
        <div className="typeScreen" />
      </div>
    </section>
  );
};

export default RightSide;

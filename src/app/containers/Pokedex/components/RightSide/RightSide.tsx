import React, { FC } from "react";
import { TextDisplayScreen, IdInputButtons } from "./components";
import PillButton from "../../../../components/PillButton";

import "./styles.css";

const RightSide: FC<any> = () => {
  return (
    <section className="rightSideContainer">
      <TextDisplayScreen />
      <IdInputButtons />
      <div>
        <PillButton />
        <PillButton />
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
      <svg className="indicatorLight">
        <circle />
        <circle />
      </svg>
      <div className="typeContainer">
        <div className="typeScreen" />
        <div className="typeScreen" />
      </div>
    </section>
  );
};

export default RightSide;

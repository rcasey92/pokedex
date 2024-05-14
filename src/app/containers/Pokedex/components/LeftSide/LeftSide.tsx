import React, { FC } from "react";

import { Screen, Scanner, Controls } from "./components";
import "./styles.css";

const LeftSide: FC<any> = () => {
  return (
    <section className={"leftSideContainer"}>
        <Scanner />
        <Screen />
        <Controls />
    </section>
  );
};

export default LeftSide;

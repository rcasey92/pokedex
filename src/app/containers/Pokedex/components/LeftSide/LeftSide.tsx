import React, { FC } from "react";

import { Screen, Scanner, Controls } from "./components";
import styles from "./styles.module.css";

/**
 * @component LeftSide
 * @description LeftSide component that contains the Scanner, Screen, and Controls components.
 * 
 * @returns {JSX.Element}
 */
const LeftSide = (): JSX.Element => {
  return (
    <section className={styles.leftSideContainer}>
        <Scanner />
        <Screen />
        <Controls />
    </section>
  );
};

export default LeftSide;

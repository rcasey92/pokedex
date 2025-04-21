import React from "react";

import styles from "./styles.module.css";

const TextDisplayScreen = () => {
  return (
    <div className={styles.displayScreen}>
      <p className={styles.introductoryText}>
        Enter a 4 digit number to display a pokemon
        <br />
        <br />
        the two buttons submit, or reset the input
      </p>
    </div>
  );
};

export default TextDisplayScreen;

import React from "react";

import "./styles.css";

interface IdInputButtonsProps {
  // Add props here
}

const IdInputButtons: React.FC<IdInputButtonsProps> = (props) => {
  const inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleInput = (value: number) => {
    // Add functionality here
  };

  return (
    <div className="buttonContainer">
      {inputValues.map((value: number) => (
        <button className="inputButton" key={`input_button_${value}`}>{value}</button>
      ))}
    </div>
  );
};

export default IdInputButtons;

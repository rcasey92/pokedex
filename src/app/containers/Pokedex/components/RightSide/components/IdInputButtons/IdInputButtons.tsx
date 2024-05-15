import React, { useState } from "react";
import classNames from "classnames";
import { INPUT_VALUES } from "./constants";

import "./styles.css";

interface IdInputButtonsProps {
  updateId: (id: string) => void;
  inputId: string;
}

const IdInputButtons: React.FC<IdInputButtonsProps> = ({
  inputId,
  updateId,
}) => {
  const [valueClicked, setValueClicked] = useState<number | null>(null);

  const onClick = (value: number) => {
    const valueString = value.toString();
    const newId = inputId + valueString;

    updateId(newId);
  };

  return (
    <div className="buttonContainer">
      {INPUT_VALUES.map((value: number) => (
        <button
          onMouseDown={() => setValueClicked(value)}
          onMouseUp={() => setValueClicked(null)}
          onClick={() => onClick(value)}
          className={classNames("inputButton", {
            buttonClicked: valueClicked !== value,
          })}
          key={`input_button_${value}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default IdInputButtons;

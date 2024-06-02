import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  moveFocusToTheLeft,
  moveFocusToTheRight,
  updateIdByControl,
} from "@/app/containers/Pokedex/redux/pokemonState";

import "./styles.css";

const ControlPad = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="controlPadContainer">
      <button
        onClick={() => dispatch(updateIdByControl({ payload: "ADD" }))}
        className="control up"
      >
        Increment
      </button>
      <button
        onClick={() => {
          console.log("clicked");
          dispatch(moveFocusToTheRight());
        }}
        className="control right"
      >
        Move Focus Right
      </button>
      <span className="control center">
        <svg className="centerDot" aria-hidden={true}>
          <circle cx={19} cy={19} r={4} />
        </svg>
      </span>
      <button
        onClick={() => dispatch(updateIdByControl({ payload: "SUBTRACT" }))}
        className="control down"
      >
        Decrement
      </button>
      <button
        onClick={() => () => {
          console.log("clicked");
          dispatch(moveFocusToTheLeft());
        }}
        className="control left"
      >
        Move focus left
      </button>
    </div>
  );
};

export default ControlPad;

import React, { FC, useState, useEffect } from "react";
import { TextDisplayScreen, IdInputButtons } from "./components";
import PillButton from "../../../../components/PillButton";
import CircularShadow from "../../../../components/CircularShadow";
import PreviewScreen from "./components/PreviewScreen";
import {
  selectId,
  selectHighlightedIndex,
  setId,
  resetId,
} from "../../redux/pokemonState";
import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import "./styles.css";

const RightSide: FC<any> = () => {
  const [inputId, setInputId] = useState<string>("0");
  const dispatch = useAppDispatch();
  const currentId = useAppSelector(selectId);
  const highlightedIndex = useAppSelector(selectHighlightedIndex);
  console.log(inputId);
  useEffect(() => {
    if (currentId === "0") {
      setInputId("");
    }
  }, [currentId]);

  const displayArray =
    inputId !== ""
      ? inputId.slice(0, 4).padStart(4, "0").split("")
      : [0, 0, 0, 0];

  return (
    <section className="rightSideContainer">
      <TextDisplayScreen />
      <IdInputButtons inputId={inputId} updateId={setInputId} />
      <div className="actionButtons">
        <PillButton
          className="buttonBackground"
          onClick={() => {
            dispatch(resetId());
            setInputId("");
          }}
          label={"reset input id"}
        />
        <PillButton
          className="buttonBackground"
          onClick={() => {
            Number(inputId) > 0 && dispatch(setId(inputId));
            setInputId("");
          }}
          label={"submit input id"}
        />
      </div>
      <div className="inputDisplay">
        {displayArray.map((value: string | number, index: number) => (
          <span
            key={`value_display_${value}_${index}`}
            className={classNames("inputCell", {
              hasFocus: highlightedIndex === index,
            })}
          >
            {value.toString()}
          </span>
        ))}
      </div>
      <CircularShadow
        className="indicatorLight"
        id="indicator-shadow"
        label="decorative indicator light"
      >
        <circle cx={337.5} cy={17} r={15.75} fill="#fed363" />
        <circle cx={337.5} cy={17} r={15} fill="#f3f750" />
        <circle cx={332} cy={10} r={3} fill="#fff" />
      </CircularShadow>
      <div className="previewContainer">
        <PreviewScreen id={Number(currentId)} previewType="previous" />
        <PreviewScreen id={Number(currentId)} previewType="next" />
      </div>
    </section>
  );
};

export default RightSide;

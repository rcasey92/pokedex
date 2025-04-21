import { FC, useState, useEffect } from "react";

import { selectId } from "@app/containers/Pokedex/redux/pokemonState";
import { IdDisplay, CircularShadow } from "@app/components";
import { useAppSelector, useAppDispatch } from "@redux/hooks";

import { TextDisplayScreen, IdInputForm, PreviewScreen } from "./components";
import styles from "./styles.module.css";

const RightSide: FC<any> = () => {
  const [inputId, setInputId] = useState<string>("0");
  const dispatch = useAppDispatch();
  const currentId = useAppSelector(selectId);

  useEffect(() => {
    if (currentId === "0") {
      setInputId("");
    }
  }, [currentId]);

  return (
    <section className={styles.rightSideContainer}>
      <TextDisplayScreen />
      <IdInputForm setInputId={setInputId} inputId={inputId} />
      <IdDisplay 
        inputId={inputId}
        label="form_id"
        cellClass={styles.inputCell}
        wrapperClass={styles.inputDisplay}
      />
      <CircularShadow
        className={styles.indicatorLight}
        id="indicator-shadow"
        label="decorative indicator light"
      >
        <circle cx={337.5} cy={17} r={15.75} fill="#fed363" />
        <circle cx={337.5} cy={17} r={15} fill="#f3f750" />
        <circle cx={332} cy={10} r={3} fill="#fff" />
      </CircularShadow>
      <div className={styles.previewContainer}>
        <PreviewScreen id={Number(currentId)} previewType="previous" />
        <PreviewScreen id={Number(currentId)} previewType="next" />
      </div>
    </section>
  );
};

export default RightSide;

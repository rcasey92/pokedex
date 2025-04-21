import { useCallback, useMemo } from "react";

import { selectId, selectHighlightedIndex, resetId } from "@app/containers/Pokedex/redux/pokemonState";
import { openModal } from "@app/containers/Pokedex/redux/modal";
import { useAppSelector, useAppDispatch } from "@redux/hooks";


import { PillButton, IdDisplay, ControlPad, CircularShadow } from "@app/components";

import styles from "./styles.module.css";


/**
 * @component Controls
 * @description Controls component that renders the control pad, indicator lights,
 * and active ID display.
 *
 * @returns {JSX.Element}
 */
const Controls = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentId: string = useAppSelector(selectId);
  const highlightedIndex = useAppSelector(selectHighlightedIndex);

  const resetInputId = useCallback(() => {
    dispatch(resetId());
  }, [dispatch]);

  const openPokemonDetailsModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch]);

  const controlButtonsDisabled = useMemo(() => (
    currentId === "" || Number(currentId) <= 0
  ), [currentId]);

  return (
    <section className={styles.controlGrid}>
      <div>
        <CircularShadow
          className={styles.controlButton}
          id="control-shadow" // id for filter access
          label="decorative indicator lights"
        >
          <circle
            filter="url(#control-shadow)"
            fill="#505050"
            cx={70}
            cy={32.5}
            r={17}
          />
        </CircularShadow>
        <div className={styles.buttonGroup}>
          <PillButton
            className={styles.redButton}
            disabled={controlButtonsDisabled}
            onClick={resetInputId}
            label="reset input id"
          />
          <PillButton
            className={styles.blueButton}
            disabled={controlButtonsDisabled}
            onClick={openPokemonDetailsModal}
            label="Open pokemon details"
          />
        </div>
      </div>
      <svg className={styles.speakerDots} height="100" width="100">
        <circle fill="#000" cx={35} cy={47.5} r={3.5} />
        <circle fill="#000" cx={60} cy={47.5} r={3.5} />
      </svg>
      <IdDisplay
        inputId={currentId}
        focusedId={highlightedIndex}
        label="active_id"
        cellClass={styles.numberContainer}
        wrapperClass={styles.currentPokemonIdScreen}
      />
      <ControlPad />
      <svg className={`${styles.speakerDots} ${styles.bottomSpeakerDots}`}>
        <circle fill="#000" cx={215} cy={4} r={3.5} />
        <rect
          height={3}
          width={10}
          x={226}
          y={2.5}
          rx={1.5}
          ry={1.5}
          fill="#000"
        />
        <circle fill="#000" cx={244} cy={4} r={1.75} />
        <rect
          height={3}
          width={10}
          x={252}
          y={2.5}
          rx={1.5}
          ry={1.5}
          fill="#000"
        />
      </svg>
    </section>
  );
};

export default Controls;

import { useCallback, useMemo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  moveFocusToTheLeft,
  moveFocusToTheRight,
  updateIdByControl,
  selectId,
} from "@app/containers/Pokedex/redux/pokemonState";
import { openModal } from "@app/containers/Pokedex/redux/modal";

import { ADD, SUBTRACT, BUTTON, CONTROL } from "./constants";

import styles from "./styles.module.css";

enum ControlPadButton {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ENTER = "enter",
}

/**
 * @component ControlPad
 * @description ControlPad component that handles user input for incrementing,
 * decrementing, and moving focus.
 *
 * @returns {JSX.Element}
 */
const ControlPad = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(selectId);
  // These should ideally be handled at a higher level
  const actionMap: Record<ControlPadButton, () => void> = useMemo(() => (
    {
      [ControlPadButton.UP]: () => dispatch(updateIdByControl(ADD)),
      [ControlPadButton.DOWN]: () => dispatch(updateIdByControl(SUBTRACT)),
      [ControlPadButton.LEFT]: () => dispatch(moveFocusToTheLeft()),
      [ControlPadButton.RIGHT]: () => dispatch(moveFocusToTheRight()),
      [ControlPadButton.ENTER]: () => {
        if(selectedId && Number(selectedId) > 0) {
          dispatch(openModal())
        } else {
          // add proper error handling, and a way to notify the user they can't open the modal
          // This is being done in an event delegator so we can't just disable the button
          // to prevent the behaviour. Though we should still disable it.
          console.warn("Invalid selectedId:", selectedId);
        }
      },
    }
  ), [dispatch, selectedId]);

  const keyMap: Record<string, ControlPadButton> = useMemo(() => ({
    ArrowUp: ControlPadButton.UP,
    ArrowDown: ControlPadButton.DOWN,
    ArrowLeft: ControlPadButton.LEFT,
    ArrowRight: ControlPadButton.RIGHT,
    Enter: ControlPadButton.ENTER,
  }), []);

  /**
   * @function clickEventDelegator
   * @description Delegates click events to the appropriate action based on the button clicked.
   * @param {MouseEvent} event - The mouse event triggered by the click.
   * @returns {void}
   */
  const clickEventDelegator = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const buttonHasControlClass = Array.from(target.classList).filter((className) => {
      return className.includes(CONTROL)
    });

    // kick out if it's not a button or control element
    if(target.tagName !== BUTTON || buttonHasControlClass.length === 0) {
      return;
    }


    
    const buttonType = (target.classList[1].split('_')[1] || "")
    // cast the found type from the class name to the enum
    const actionKey = buttonType as ControlPadButton;
    const action = actionMap[actionKey];
    
    if (action) {
      action();
    }
  }, [actionMap]);

  /**
   * @function handleKeyDown
   * @description Handles keydown events for keyboard navigation.
   * @param {KeyboardEvent} event - The keyboard event triggered by the key press.
   * @returns {void}
   */
  const keyDownEventDelegator = useCallback((event: KeyboardEvent) => {
    const keyCode = event.key;
    const actionKey = keyMap[keyCode];

    // kick out if it's not a key we care about
    if (!actionKey) {
      return;
    }
    
    const action = actionMap[actionKey];
    
    if (action) {
      action();
      // stop arrow keys from affecting screen navigation
      event.preventDefault();
    }
  }, [actionMap, keyMap]);

  useEffect(() => {
    const abortController = new AbortController();

    // add event listeners for keydown and click outside
    document.addEventListener("keydown", keyDownEventDelegator, { signal: abortController.signal });
    document.addEventListener("mousedown", clickEventDelegator, { signal: abortController.signal });
    // clean up the event listeners on component unmount
    return () => {
      abortController.abort();
    }
  }, [keyDownEventDelegator, clickEventDelegator]);



  return (
    <div className={styles.controlPadContainer}>
      <button className={`${styles.control} ${styles.up}`}>
        Increment
      </button>
      <button className={`${styles.control} ${styles.right}`}>
        Move Focus Right
      </button>
      <span className={`${styles.control} ${styles.center}`}>
        <svg className={styles.centerDot} aria-hidden={true} height="40" width="40">
          <circle cx={19} cy={19} r={4} />
        </svg>
      </span>
      <button className={`${styles.control} ${styles.down}`}>
        Decrement
      </button>
      <button className={`${styles.control} ${styles.left}`}>
        Move focus left
      </button>
    </div>
  );
};

export default ControlPad;

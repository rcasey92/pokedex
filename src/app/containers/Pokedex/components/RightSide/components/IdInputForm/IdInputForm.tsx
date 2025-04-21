import { useCallback, Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { INPUT_VALUES } from "./constants";

import { PillButton } from "@app/components";

import { setId, resetId, } from "@app/containers/Pokedex/redux/pokemonState";
import { useAppDispatch } from "@redux/hooks";

import styles from "./styles.module.css";

interface IdInputFormProps {
  setInputId: Dispatch<SetStateAction<string>>;
  inputId: string,
}

const IdInputForm  = ({
  setInputId,
  inputId
}: IdInputFormProps) => {
  const [valueClicked, setValueClicked] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const onClick = useCallback((value: number) => {
    setInputId((prevId: string): string => {
      const valueString = value.toString();
      const newId = prevId + valueString;
      
      // Lock the value to max 1025
      return Number(newId) > 1025 ? "1025" : newId;
    });
  }, [setInputId]);

  const formSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    Number(inputId) > 0 && dispatch(setId(inputId));
    setInputId("");
  }, [inputId, dispatch, setInputId]);

  return (
    <form onSubmit={formSubmit}>
      <div className={styles.buttonContainer}>
        {INPUT_VALUES.map((value: number) => (
         <div className={styles.inputElement} key={`input_button_${value}`}>
          <label className={styles.visuallyHidden} htmlFor={`input_button_${value}`}>
            {`input button ${value}`}
          </label>
            <input
              onMouseDown={() => setValueClicked(value)}
              onMouseUp={() => setValueClicked(null)}
              onClick={() => onClick(value)}
              className={classNames(styles.inputButton, {
                [`${styles.buttonClicked}`]: valueClicked !== value,
              })}
              key={`input_button_${value}`}
              aria-label={`input button ${value}`}
              value={value}
              type="button"
            />
          </div>
        ))}
      </div>
      <div className={styles.actionButtons}>
        <PillButton
          className={styles.buttonBackground}
          onClick={() => {
            dispatch(resetId());
            setInputId("");
          }}
          label={"reset input id"}
        />
        {/* no need for an onclick here as it triggers the form submit */}
        <PillButton
          className={styles.buttonBackground}
          type="submit"
          label={"submit input id"}
        />
      </div>
    </form>
  );
};

export default IdInputForm;

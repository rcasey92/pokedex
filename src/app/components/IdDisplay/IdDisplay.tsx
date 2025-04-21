import { useMemo } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

type IdDisplayProps = {
    inputId: string;
    focusedId?: number;
    label: string;
    cellClass: string;
    wrapperClass: string;
}

/**
 * @component IdDisplay
 * @description This component displays the input ID in a 4-digit format, with each digit in its own cell.
 * It optionally highlights the cell that is currently focused.
 * 
 * @returns {JSX.Element}
 */
const IdDisplay = ({
    inputId,
    focusedId,
    label,
    cellClass,
    wrapperClass
}: IdDisplayProps): JSX.Element => {
    const displayArray: number[] = useMemo(() => (
        inputId !== ""
            ? inputId.slice(0, 4).padStart(4, "0").split("").map(Number)
            : [0, 0, 0, 0]
        ), [inputId]);

    return (
        <div className={wrapperClass}>
        {displayArray.map((value: number, index: number) => (
          <span
            key={`value_display_${label}_${value}_${index}`}
            className={classNames(cellClass, {
                [`${styles.hasFocus}`]: focusedId === index,
            })}
          >
            {value}
          </span>
        ))}
      </div>
    );
}

export default IdDisplay;

import classNames from "classnames";

import styles from "./styles.module.css";

interface PillButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  tabIndex?: number;
  [key: string]: any;
}

/**
 * @component PillButton
 * @description PillButton component that serves as a button with pill-like appearance.
 *
 * @returns {JSX.Element}
 */
const PillButton = ({
  tabIndex = 1,
  className,
  label,
  onClick,
  ...rest
}: PillButtonProps): JSX.Element => (
  <button
    aria-hidden={!label}
    aria-label={label}
    onClick={onClick}
    tabIndex={tabIndex}
    className={classNames(styles.baseButton, className)}
    {...rest}
  />
);


export default PillButton;

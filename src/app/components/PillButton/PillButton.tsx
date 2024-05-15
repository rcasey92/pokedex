import React, { FC } from "react";
import classNames from "classnames";

import "./styles.css";

interface PillButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  tabIndex?: number;
}

const PillButton: FC<PillButtonProps> = ({
  tabIndex = 1,
  className,
  label,
  onClick,
}) => {
  return (
    <button
      aria-hidden={!label}
      aria-label={label}
      onClick={onClick}
      tabIndex={tabIndex}
      className={classNames("baseButton", className)}
    />
  );
};

export default PillButton;

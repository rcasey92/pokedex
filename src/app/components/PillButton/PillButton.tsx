import React, { FC } from "react";
import classNames from "classnames";

import "./styles.css";

interface PillButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
}

const PillButton: FC<PillButtonProps> = ({ className, label, onClick }) => {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={classNames("baseButton", className)}
    />
  );
};

export default PillButton;

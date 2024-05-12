import React, { FC } from "react";
import classNames from "classnames";

import "./styles.css";

interface PillButtonProps {
  className: string;
  label: string;
}

const PillButton: FC<PillButtonProps> = ({ className, label }) => {
  return <button className={classNames("baseButton", className)} />;
};

export default PillButton;

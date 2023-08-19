import React from "react";
import { styles } from "./styles";

import { ButtonType, ButtonVariantType } from "../../types/component";
import { cx } from "@emotion/css";

interface ButtonProps {
  type: ButtonType;
  label?: string;
  variant: ButtonVariantType;
  disabled?: boolean;
  handleClick?: () => void;
  customClassName?: any;
}
export const Button = ({
  type,
  label,
  variant,
  handleClick,
  disabled,
  customClassName,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={cx(styles.button(variant), customClassName)}
    >
      {label}
    </button>
  );
};

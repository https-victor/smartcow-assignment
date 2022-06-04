import classNames from "classnames";
import React from "react";
import "./Button.scss";
const Button = ({
  title,
  variant = "text",
  disabled,
  padding = true,
  color = "success",
  ...restProps
}: any) => {
  return (
    <button
      className={classNames(
        "button",
        variant,
        padding && "padding",
        disabled && "disabled",
        color && color
      )}
      disabled={disabled}
      {...restProps}
    ></button>
  );
};

export default Button;

import classNames from "classnames";
import React from "react";
import Button from "../Button/Button";
import "./Input.scss";

const Input = ({ label, action, error, ...restProps }: any) => {
  return label || action ? (
    <div className="input-wrapper">
      <div
        className={classNames(
          "label-wrapper",
          label && action && "label-wrapper-space-between",
          !label && action && "label-wrapper-right"
        )}
      >
        {label && <label className="label">{label}</label>}
        {action && (
          <Button
            onClick={action.onClick}
            padding={false}
            variant="text"
            color={action.color || "primary"}
          >
            {action.title}
          </Button>
        )}
      </div>
      <input className={classNames("input")} {...restProps} />
      <div className="input-error">{error && error}</div>
    </div>
  ) : (
    <input className={classNames("input")} {...restProps} />
  );
};

export default Input;

import React from "react";
import "./Container.scss";
import classNames from "classnames";

const Container = ({ centered, overflow = false, children }: any) => {
  return (
    <div
      className={classNames(
        "page-layout",
        centered && "centered",
        overflow && "overflow"
      )}
    >
      {children}
    </div>
  );
};

export default Container;

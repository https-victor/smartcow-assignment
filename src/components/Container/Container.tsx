import React from "react";
import "./Container.scss";
import classNames from "classnames";

const Container = ({ centered, children }: any) => {
  return (
    <div className={classNames("page-layout", centered && "centered")}>
      {children}
    </div>
  );
};

export default Container;

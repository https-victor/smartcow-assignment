import React from "react";
import "./Container.scss";

type Props = {};

const Container = ({ children }: any) => {
  return <div className="page-layout">{children}</div>;
};

export default Container;

import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/svg/logo.svg";
import Menu from "../Menu/Menu";
interface Props {}

export const Sidebar = ({}: Props) => {
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <Menu />
      <div className="sidebar-profile"></div>
    </div>
  );
};

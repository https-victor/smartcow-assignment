import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import Menu from "../Menu/Menu";
import IconButton from "../Menu/IconButton/IconButton";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes";
import ProfileButton from "./ProfileButton/ProfileButton";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={appRoutes.home} className="sidebar-logo">
        <IconButton icon={Logo} />
      </Link>
      <Menu />
      <ProfileButton />
    </div>
  );
};

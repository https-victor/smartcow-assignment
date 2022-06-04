import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "..";
import "./Layout.scss";
interface Props {}
export const Layout = ({}: Props) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

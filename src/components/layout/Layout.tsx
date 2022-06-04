import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "..";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './AuthLayout.scss';
interface Props {}
export const AuthLayout = ({}: Props) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

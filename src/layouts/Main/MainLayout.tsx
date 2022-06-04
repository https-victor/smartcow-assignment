import React from 'react';
import { Outlet } from 'react-router-dom';
interface Props {}
export const MainLayout = ({}: Props) => {
  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  );
};

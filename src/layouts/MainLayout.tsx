import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes';

export const Library = () => {
  return (
    <div>
      Library
      <Link to={appRoutes.createVideo}>Create New Video</Link>
      <Link to={appRoutes.editVideo}>Edit Video</Link>
      <Link to={appRoutes.profile}>Profile</Link>
    </div>
  );
};

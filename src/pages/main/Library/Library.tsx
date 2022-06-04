import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../routes';
interface Props {}
export const Library = ({}: Props) => {
  return (
    <div>
      Library
      <Link to={appRoutes.createVideo}>Create New Video</Link>
      <Link to={appRoutes.editVideo}>Edit Video</Link>
      <Link to={appRoutes.profile}>Profile</Link>
    </div>
  );
};

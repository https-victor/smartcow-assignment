import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes';

export const SignUp = () => {
  return (
    <div>
      SignUp<Link to={appRoutes.signIn}>Login</Link>
    </div>
  );
};

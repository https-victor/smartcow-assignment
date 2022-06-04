import { Link } from 'react-router-dom';
import { onLogin } from '../../app/features/auth/auth-slice';
import { useDispatch } from '../../app/hooks';
import { appRoutes } from '../../routes';

export const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      SignIn
      <button
        onClick={() => {
          dispatch(onLogin());
        }}
      >
        Login
      </button>
      <Link to={appRoutes.signUp}>SignUp</Link>
    </div>
  );
};

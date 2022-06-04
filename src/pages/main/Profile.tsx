import { onLogout } from '../../app/features/auth/auth-slice';
import { useDispatch } from '../../app/hooks';

export const Profile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Profile
      <button
        onClick={() => {
          dispatch(onLogout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

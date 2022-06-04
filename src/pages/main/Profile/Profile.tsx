import { onLogout } from '../../../app/features/auth/auth-slice';
import { useDispatch } from '../../../app/hooks';
interface Props {}
export const Profile = ({}: Props) => {
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

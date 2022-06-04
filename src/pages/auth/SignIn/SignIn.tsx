import { Link } from "react-router-dom";
import { onLogin } from "../../../app/features/auth/auth-slice";
import { useDispatch } from "../../../app/hooks";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
interface Props {}
export const SignIn = ({}: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Header title="Sign In" divider={true} />
      <Container>
        <button
          onClick={() => {
            dispatch(onLogin());
          }}
        >
          Login
        </button>
        <Link to={appRoutes.signUp}>SignUp</Link>
      </Container>
    </>
  );
};

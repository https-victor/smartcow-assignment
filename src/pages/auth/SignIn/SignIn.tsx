import { Link } from "react-router-dom";
import { onLogin } from "../../../app/features/auth/auth-slice";
import { useDispatch } from "../../../app/hooks";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import Input from "../../../components/Input/Input";
import { appRoutes } from "../../../routes";
import "./SignIn.scss";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import SignInForm from "./SignInForm/SignInForm";
interface Props {}
export const SignIn = ({}: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Header title="Sign In" divider={false} />
      <Container centered={true}>
        <div className="login-logo-background">
          <Logo />
        </div>
        <div className="login-wrapper">
          <SignInForm />
        </div>
      </Container>
    </>
  );
};

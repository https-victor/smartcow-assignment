import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import "./SignIn.scss";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import SignInForm from "./SignInForm/SignInForm";

export const SignIn = () => {
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

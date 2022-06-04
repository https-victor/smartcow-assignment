import React from "react";
import { Link } from "react-router-dom";
import { onLogin } from "../../../../app/features/auth/auth-slice";
import { useDispatch } from "../../../../app/hooks";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { appRoutes } from "../../../../routes";
import "./SignInForm.scss";
type Props = {};

const SignInForm = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <form className="login-form">
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        action={{ title: "Forgot?", onClick: () => {} }}
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(onLogin());
        }}
      >
        Login
      </Button>
      <p>
        New here? <Link to={appRoutes.signUp}>Signup</Link>
      </p>
    </form>
  );
};

export default SignInForm;

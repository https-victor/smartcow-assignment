import React from "react";
import { Link } from "react-router-dom";
import { onLogin } from "../../../../app/features/auth/auth-slice";
import { useDispatch } from "../../../../app/hooks";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { appRoutes } from "../../../../routes";
import "./SignUpForm.scss";
type Props = {};

const SignUpForm = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <form className="login-form">
      <Input
        label="Full Name"
        type="text"
        name="email"
        placeholder="Enter your full name"
      />
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <Input
        label="New Password"
        action={{ color: "success", title: "Strong" }}
        type="password"
        name="password"
        placeholder="Enter a new password"
      />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(onLogin());
        }}
      >
        Sign Up
      </Button>
      <p>
        Already user? <Link to={appRoutes.signIn}>Login</Link>
      </p>
    </form>
  );
};

export default SignUpForm;

import React from "react";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import SignUpForm from "./SignUpForm/SignUpForm";

export const SignUp = () => {
  return (
    <>
      <Header title="Sign Up" divider={false} />
      <Container centered={true}>
        <SignUpForm />
      </Container>
    </>
  );
};

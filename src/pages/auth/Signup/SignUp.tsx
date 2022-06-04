import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
import SignUpForm from "./SignUpForm/SignUpForm";
interface Props {}
export const SignUp = ({}: Props) => {
  return (
    <>
      <Header title="Sign Up" divider={false} />
      <Container centered={true}>
        <SignUpForm />
      </Container>
    </>
  );
};

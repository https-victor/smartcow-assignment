import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
interface Props {}
export const SignUp = ({}: Props) => {
  return (
    <Container>
      <Header title="Sign Up" divider={false} />
      <Link to={appRoutes.signIn}>Login</Link>
    </Container>
  );
};

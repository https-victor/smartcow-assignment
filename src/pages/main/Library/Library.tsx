import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
interface Props {}
export const Library = ({}: Props) => {
  return (
    <>
      <Header title="Saved Videos" />
      <Container>
        <Link to={appRoutes.createVideo}>Create New Video</Link>
        <Link to={appRoutes.editVideo}>Edit Video</Link>
      </Container>
    </>
  );
};

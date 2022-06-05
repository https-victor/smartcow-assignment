import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import VideoGrid from "../../../components/VideoGrid/VideoGrid";
import { appRoutes } from "../../../routes";

export const Library = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Saved Videos"
        actions={[
          {
            title: "Create New",
            variant: "contained",
            onClick: () => {
              navigate(appRoutes.createVideo);
            },
          },
        ]}
      />
      <Container>
        <VideoGrid />
        <Link to={appRoutes.editVideo}>Edit Video</Link>
      </Container>
    </>
  );
};

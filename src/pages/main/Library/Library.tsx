import React, { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  onCloseModal,
  onRemoveVideo,
} from "../../../app/features/library/library-slice";
import { useDispatch, useSelector } from "../../../app/hooks";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import VideoGrid from "../../../components/VideoGrid/VideoGrid";
import { appRoutes } from "../../../routes";
import "./Library.scss";

export const Library = () => {
  const modal = useSelector((state) => state.library.modal);
  const selectedVideo = useSelector((state) => state.library.selectedVideo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Header
        title="Saved Videos"
        actions={[
          {
            title: "Create New",
            variant: "contained",
            onClick: () => {
              navigate(appRoutes.newVideo);
            },
          },
        ]}
      />
      <Container>
        <VideoGrid />
        {modal && (
          <div className="modal">
            <div className="alert">
              <p>Are you sure you want to delete this video?</p>
              <div className="actions">
                <Button
                  variant="contained"
                  color="neutral"
                  onClick={() => dispatch(onCloseModal())}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(onRemoveVideo(selectedVideo))}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

import { matchRoutes, useLocation, useParams } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "../../../app/hooks";
import { Alignment } from "../../../app/features/library/library-slice";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import DetailsForm from "./DetailsForm/DetailsForm";
import "./VideoForm.scss";
import { useState } from "react";
const videoDetailsFormValidation = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string(),
  tags: yup.array().of(yup.string()),
});

export const VideoForm = () => {
  const { actors, backgrounds, voices } = useSelector((state) => state.preset);
  const videos = useSelector((state) => state.library.videos);

  const location = useLocation();
  const params = useParams();
  const isEditVideoRoute = Boolean(params.id);
  const [tabs, setTabs] = useState(0);
  const videoDefaultValues = {
    title: "Saying Hi to my customers",
    description: "",
    tags: [],
    transcript:
      "Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages",
    actor: actors[0],
    voice: voices[0],
    alignment: Alignment.Center,
    background: backgrounds[0],
  };
  const {
    title,
    description,
    tags,
    actor,
    transcript,
    voice,
    alignment,
    background,
  } = isEditVideoRoute
    ? videos.find((video) => video.id === params.id) || videoDefaultValues
    : videoDefaultValues;

  const videoDetailsForm = useFormik({
    initialValues: { title, description, tags },
    validationSchema: videoDetailsFormValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const videoForm = useFormik({
    initialValues: {
      actor: actor.id,
      voice: voice.id,
      transcript,
      alignment,
      background: background.id,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const chosenActor =
    actors.find((actor) => actor.id === videoForm.values.actor)?.image ||
    "https://i.imgur.com/izBoUzB.png";
  const chosenBackground =
    backgrounds.find(
      (background) => background.id === videoForm.values.background
    )?.image || "https://i.imgur.com/3H2aXWj.png";
  console.log(videoForm.values);

  const TabContainer = () => {
    switch (tabs) {
      case 1:
        return (
          <div className="voices">
            {voices.map((voice) => {
              return (
                <div key={voice.id} className="voice-wrapper">
                  <p className="voice-name">{voice.title}</p>
                </div>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className="alignments">
            <Button variant="outlined">Left</Button>
            <Button variant="outlined">Center</Button>
            <Button variant="outlined">Right</Button>
          </div>
        );
      case 3:
        return (
          <div className="backgrounds">
            {backgrounds.map((background) => {
              return (
                <div key={background.id} className="background-wrapper">
                  <img
                    src={background.image}
                    alt=""
                    className="background-image"
                  />
                  <p className="background-name">{background.title}</p>
                </div>
              );
            })}
          </div>
        );
      default:
        return (
          <div className="actors">
            {actors.map((actor) => {
              return (
                <div key={actor.id} className="actor-wrapper">
                  <img src={actor.image} alt="" className="actor-image" />
                  <p className="actor-name">{actor.name}</p>
                </div>
              );
            })}
          </div>
        );
    }
  };
  return (
    <>
      <Header
        title={videoDetailsForm.values.title}
        actions={[
          {
            title: "Cancel",
            variant: "contained",
            color: "neutral",
            onClick: () => {},
          },
          {
            title: "Save",
            variant: "contained",
            color: "success",
            onClick: () => {},
          },
        ]}
      />
      <Container>
        {/* <DetailsForm form={videoDetailsForm} /> */}
        <div className="video-form">
          <div className="preview-card">
            <div
              className="preview-video"
              style={{ backgroundImage: `url("${chosenActor}")` }}
            ></div>
            <div className="transcript-wrapper">
              <textarea
                name="transcript"
                onChange={videoForm.handleChange}
                onBlur={videoForm.handleBlur}
                value={videoForm.values.transcript}
                placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
              ></textarea>
              <Button variant="contained" color="neutral">
                Listen
              </Button>
            </div>
          </div>
          <div className="video-options">
            <div className="tabs-wrapper">
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  setTabs(0);
                }}
              >
                Actor
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  setTabs(1);
                }}
              >
                Voice
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  setTabs(2);
                }}
              >
                Alignment
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  setTabs(3);
                }}
              >
                Background
              </Button>
            </div>
            <div className="option-wrapper">
              <TabContainer />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

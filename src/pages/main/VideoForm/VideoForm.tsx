import {
  matchRoutes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import { appRoutes } from "../../../routes";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "../../../app/hooks";
import {
  Alignment,
  onAddVideo,
  onEditVideo,
} from "../../../app/features/library/library-slice";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import DetailsForm from "./DetailsForm/DetailsForm";
import "./VideoForm.scss";
import { useState } from "react";
import Actors from "./Actors/Actors";
import Alignments from "./Alignments/Alignments";
import Backgrounds from "./Backgrounds/Backgrounds";
import Voices from "./Voices/Voices";

export const VideoForm = () => {
  const { actors, backgrounds, voices } = useSelector((state) => state.preset);
  const videos = useSelector((state) => state.library.videos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isEditVideoRoute = Boolean(params.id);
  const [tabs, setTabs] = useState(0);
  const [modal, setModal] = useState(false);
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

  const [titleForm, setTitleForm] = useState(title);
  const [descriptionForm, setDescriptionForm] = useState(description);
  const [tagsForm, setTagsForm] = useState(tags);

  function onSubmitDetailsForm(values: any) {
    setTitleForm(values.title);
    setDescriptionForm(values.description);
    setTagsForm(values.tags);
    setModal(false);
  }

  const videoForm = useFormik({
    initialValues: {
      actor: actor.id,
      voice: voice.id,
      transcript,
      alignment,
      background: background.id,
    },
    onSubmit: (values) => {},
  });
  const chosenActor =
    actors.find((actor) => actor.id === videoForm.values.actor)?.image ||
    "https://i.imgur.com/izBoUzB.png";
  const chosenBackground =
    backgrounds.find(
      (background) => background.id === videoForm.values.background
    )?.image || "https://i.imgur.com/3H2aXWj.png";
  const TabContainer = () => {
    switch (tabs) {
      case 1:
        return (
          <Voices
            voices={voices}
            selected={videoForm.values.voice}
            onSelect={(voiceId: any) => {
              videoForm.setFieldValue("voice", voiceId);
            }}
          />
        );
      case 2:
        return (
          <Alignments
            onSelect={(alignment) => {
              videoForm.setFieldValue("alignment", alignment);
            }}
            selected={videoForm.values.alignment}
          />
        );
      case 3:
        return (
          <Backgrounds
            backgrounds={backgrounds}
            selected={videoForm.values.background}
            onSelect={(backgroundId) => {
              videoForm.setFieldValue("background", backgroundId);
            }}
          />
        );
      default:
        return (
          <Actors
            actors={actors}
            selected={videoForm.values.actor}
            onSelect={(actorId) => {
              videoForm.setFieldValue("actor", actorId);
            }}
          />
        );
    }
  };

  const tabsButtons = ["Actor", "Voice", "Alignment", "Background"];
  return (
    <>
      <Header
        modal={modal}
        title={titleForm}
        titleAction={() => {
          setModal(true);
        }}
        actions={[
          {
            title: "Cancel",
            variant: "contained",
            color: "neutral",
            onClick: () => {
              navigate(appRoutes.home);
            },
          },
          {
            title: "Save",
            variant: "contained",
            color: "success",
            onClick: () => {
              if (isEditVideoRoute && params.id) {
                dispatch(
                  onEditVideo({
                    id: params.id,
                    actor: actors.find(
                      (actor) => actor.id === videoForm.values.actor
                    ),
                    background: backgrounds.find(
                      (background) =>
                        background.id === videoForm.values.background
                    ),
                    voice: voices.find(
                      (voice) => voice.id === videoForm.values.voice
                    ),
                    transcript: videoForm.values.transcript,
                    alignment: videoForm.values.alignment,
                    title: titleForm,
                    description: descriptionForm,
                    tags: tagsForm,
                  } as any)
                );
              } else {
                dispatch(
                  onAddVideo({
                    actor: actors.find(
                      (actor) => actor.id === videoForm.values.actor
                    ),
                    background: backgrounds.find(
                      (background) =>
                        background.id === videoForm.values.background
                    ),
                    voice: voices.find(
                      (voice) => voice.id === videoForm.values.voice
                    ),
                    transcript: videoForm.values.transcript,
                    alignment: videoForm.values.alignment,
                    title: titleForm,
                    description: descriptionForm,
                    tags: tagsForm,
                  } as any)
                );
              }
              navigate(appRoutes.home);
            },
          },
        ]}
      />
      <Container>
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
              {tabsButtons.map((tab, idx: number) => {
                return (
                  <Button
                    key={tab + idx}
                    variant="text"
                    padding={false}
                    color={tabs === idx ? "primary" : "neutral"}
                    onClick={() => {
                      setTabs(idx);
                    }}
                  >
                    {tab}
                  </Button>
                );
              })}
            </div>
            <div className="option-wrapper">
              <TabContainer />
            </div>
          </div>
        </div>
        {modal && (
          <div className="header-modal">
            <DetailsForm
              onSubmit={onSubmitDetailsForm}
              initialValues={{
                title: titleForm,
                description: descriptionForm,
                tags: tagsForm,
              }}
            />
          </div>
        )}
      </Container>
    </>
  );
};

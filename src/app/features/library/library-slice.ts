import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Actor, Background, BackgroundType, Voice } from "./preset-slice";

export enum Alignment {
  Left = "Left",
  Center = "Center",
  Right = "Right",
}

interface VideoPayload {
  title: string;
  description: string;
  tags: string[];
  transcript: string;
  actor: Actor;
  voice: Voice;
  alignment: Alignment;
  background: Background;
}

interface Video extends VideoPayload {
  id: string;
}

interface LibraryState {
  videos: Video[];
  modal: boolean;
  selectedVideo: string;
}

const initialState: LibraryState = {
  modal: false,
  selectedVideo: "",
  videos: [
    {
      id: uuidv4(),
      alignment: Alignment.Center,
      title: "Saying Hi to users!",
      description: "Saying hi to users!",
      tags: ["Email", "Marketing", "Greeting"],
      transcript:
        "Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages",
      actor: {
        id: uuidv4(),
        image: "https://i.imgur.com/izBoUzB.png",
        name: "Anna",
      },
      voice: {
        id: uuidv4(),
        src: "https://audio-samples.github.io/samples/mp3/voxceleb2_unconditional/sample-1.mp3",
        title: "Asian",
      },
      background: {
        id: uuidv4(),
        image: "https://i.imgur.com/3H2aXWj.png",
        title: "Office",
        type: BackgroundType.Image,
      },
    },
    {
      id: uuidv4(),
      alignment: Alignment.Center,
      title: "Saying Hi to users!",
      description: "Saying hi to users!",
      tags: ["Email", "Marketing", "Greeting"],
      actor: {
        id: uuidv4(),
        image: "https://i.imgur.com/izBoUzB.png",
        name: "Anna",
      },
      transcript:
        "Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages",
      voice: {
        id: uuidv4(),
        src: "https://audio-samples.github.io/samples/mp3/voxceleb2_unconditional/sample-1.mp3",
        title: "Asian",
      },
      background: {
        id: uuidv4(),
        image: "https://i.imgur.com/3H2aXWj.png",
        title: "Office",
        type: BackgroundType.Image,
      },
    },
    {
      id: uuidv4(),
      alignment: Alignment.Center,
      title: "Saying Hi to users!",
      description: "Saying hi to users!",
      tags: ["Email", "Marketing", "Greeting"],
      actor: {
        id: uuidv4(),
        image: "https://i.imgur.com/izBoUzB.png",
        name: "Anna",
      },
      transcript:
        "Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages",
      voice: {
        id: uuidv4(),
        src: "https://audio-samples.github.io/samples/mp3/voxceleb2_unconditional/sample-1.mp3",
        title: "Asian",
      },
      background: {
        id: uuidv4(),
        image: "https://i.imgur.com/3H2aXWj.png",
        title: "Office",
        type: BackgroundType.Image,
      },
    },
  ],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    onSelectVideoToRemoval(state, action: PayloadAction<string>) {
      state.selectedVideo = action.payload;
      state.modal = true;
    },
    onCloseModal(state) {
      state.selectedVideo = "";
      state.modal = false;
    },
    onAddVideo(state, action: PayloadAction<VideoPayload>) {
      state.videos = [...state.videos, { ...action.payload, id: uuidv4() }];
    },
    onEditVideo(state, action: PayloadAction<Video>) {
      state.videos = state.videos.map((video) =>
        video.id === action.payload.id ? { ...video, ...action.payload } : video
      );
    },
    onRemoveVideo(state, action: PayloadAction<string>) {
      state.modal = false;
      state.videos = state.videos.filter(
        (video) => video.id !== action.payload
      );
    },
  },
});

export const {
  onAddVideo,
  onEditVideo,
  onRemoveVideo,
  onSelectVideoToRemoval,
  onCloseModal,
} = librarySlice.actions;
export default librarySlice.reducer;

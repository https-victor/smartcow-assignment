import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Actor, Background, Voice } from "./preset-slice";

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
  videos: [],
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

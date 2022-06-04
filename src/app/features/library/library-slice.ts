import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export enum Alignment {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right'
}

// interface Actor {
//   id: number;
//   name: string;
//   image: string;
// }

// interface Voice {
//   id: number;
//   title: string;
//   src: string;
// }

// interface Background {
//   id: number;
//   title: string;
//   image: string;
// }

interface VideoPayload {
  title: string;
  description: string;
  tags: string[];
  actor: string;
  voice: string;
  alignment: Alignment;
  background: string;
}

interface Video extends VideoPayload {
  id: string;
}

interface LibraryState {
  videos: Video[];
}

const initialState: LibraryState = {
  videos: []
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    onAddVideo(state, action: PayloadAction<VideoPayload>) {
      state.videos = [...state.videos, { ...action.payload, id: uuidv4() }];
    },
    onEditVideo(state, action: PayloadAction<Video>) {
      state.videos = state.videos.map((video) =>
        video.id === action.payload.id ? { ...video, ...action.payload } : video
      );
    },
    onRemoveVideo(state, action: PayloadAction<string>) {
      state.videos = state.videos.filter((video) => video.id !== action.payload);
    }
  }
});

export const { onAddVideo, onRemoveVideo } = librarySlice.actions;
export default librarySlice.reducer;

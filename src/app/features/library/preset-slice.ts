import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export enum BackgroundType {
  Image = "Image",
  SolidColors = "Solid Colors",
  Videos = "Videos",
}

interface ActorPayload {
  name: string;
  image: string;
}

export interface Actor extends ActorPayload {
  id: string;
}

interface VoicePayload {
  title: string;
  src: string;
}

export interface Voice extends VoicePayload {
  id: string;
}

interface BackgroundPayload {
  title: string;
  type: BackgroundType;
  image: string;
}

export interface Background extends BackgroundPayload {
  id: string;
}

interface PresetState {
  actors: Actor[];
  voices: Voice[];
  backgrounds: Background[];
}

const initialState: PresetState = {
  actors: [
    { id: uuidv4(), image: "https://i.imgur.com/izBoUzB.png", name: "Anna" },
    { id: uuidv4(), image: "https://i.imgur.com/C1egQ0G.png", name: "Yoyo" },
    { id: uuidv4(), image: "https://i.imgur.com/du0yFV5.png", name: "Skye" },
    { id: uuidv4(), image: "https://i.imgur.com/U5n89yw.png", name: "Mike" },
    { id: uuidv4(), image: "https://i.imgur.com/wILkhzS.png", name: "Vincent" },
    { id: uuidv4(), image: "https://i.imgur.com/9NiVyGY.png", name: "Peter" },
    { id: uuidv4(), image: "https://i.imgur.com/RjOqLYU.png", name: "May" },
  ],
  voices: [
    {
      id: uuidv4(),
      title: "Asian",
      src: "https://audio-samples.github.io/samples/mp3/voxceleb2_unconditional/sample-1.mp3",
    },
    {
      id: uuidv4(),
      title: "British",
      src: "https://audio-samples.github.io/samples/mp3/blizzard_primed/sample-3.mp3",
    },
    {
      id: uuidv4(),
      title: "American",
      src: "https://audio-samples.github.io/samples/mp3/voxceleb2_unconditional/sample-7.mp3",
    },
  ],
  backgrounds: [
    {
      id: uuidv4(),
      image: "https://i.imgur.com/3H2aXWj.png",
      title: "Office",
      type: BackgroundType.Image,
    },
    {
      id: uuidv4(),
      image: "https://i.imgur.com/ULTZPj2.png",
      title: "Space",
      type: BackgroundType.Image,
    },
    {
      id: uuidv4(),
      image: "https://i.imgur.com/ThGlAVe.png",
      title: "Noise",
      type: BackgroundType.Image,
    },
    {
      id: uuidv4(),
      image: "https://i.imgur.com/TJQ5AEr.png",
      title: "Meeting Room",
      type: BackgroundType.Image,
    },
    {
      id: uuidv4(),
      image: "https://i.imgur.com/SXr6t1d.png",
      title: "Books",
      type: BackgroundType.Image,
    },
    {
      id: uuidv4(),
      image: "https://i.imgur.com/rGl4zUL.png",
      title: "Desk",
      type: BackgroundType.Image,
    },
  ],
};

const presetSlice = createSlice({
  name: "preset",
  initialState,
  reducers: {
    onAddActor(state, action: PayloadAction<ActorPayload>) {
      state.actors = [...state.actors, { ...action.payload, id: uuidv4() }];
    },
    onEditActor(state, action: PayloadAction<Actor>) {
      state.actors = state.actors.map((actor) =>
        actor.id === action.payload.id ? { ...actor, ...action.payload } : actor
      );
    },
    onRemoveActor(state, action: PayloadAction<string>) {
      state.actors = state.actors.filter(
        (actor) => actor.id !== action.payload
      );
    },
    onAddVoice(state, action: PayloadAction<VoicePayload>) {
      state.voices = [...state.voices, { ...action.payload, id: uuidv4() }];
    },
    onEditVoice(state, action: PayloadAction<Voice>) {
      state.voices = state.voices.map((voice) =>
        voice.id === action.payload.id ? { ...voice, ...action.payload } : voice
      );
    },
    onRemoveVoice(state, action: PayloadAction<string>) {
      state.voices = state.voices.filter(
        (voice) => voice.id !== action.payload
      );
    },
    onAddBackground(state, action: PayloadAction<BackgroundPayload>) {
      state.backgrounds = [
        ...state.backgrounds,
        { ...action.payload, id: uuidv4() },
      ];
    },
    onEditBackground(state, action: PayloadAction<Background>) {
      state.backgrounds = state.backgrounds.map((background) =>
        background.id === action.payload.id
          ? { ...background, ...action.payload }
          : background
      );
    },
    onRemoveBackground(state, action: PayloadAction<string>) {
      state.backgrounds = state.backgrounds.filter(
        (background) => background.id !== action.payload
      );
    },
  },
});

export const {
  onAddActor,
  onEditActor,
  onRemoveActor,
  onAddVoice,
  onEditVoice,
  onRemoveVoice,
  onAddBackground,
  onEditBackground,
  onRemoveBackground,
} = presetSlice.actions;
export default presetSlice.reducer;

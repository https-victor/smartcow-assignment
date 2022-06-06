import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Billing {
  id: string;
  date: string;
  amount: number;
  invoice: string;
}

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

interface User extends Profile {
  image: string;
  plan: 0 | 1 | 2 | 3;
  billings: Billing[];
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin(state) {
      state.isLoggedIn = true;
      state.user = {
        firstName: "Victor",
        lastName: "Oliveira",
        plan: 2,
        billings: [
          {
            id: "4571222f6rthswfg9981fr54",
            date: "7/12/2020",
            amount: 28,
            invoice: "http://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "4571222f6rthswfg9981fr55",
            date: "7/12/2020",
            amount: 36,
            invoice: "http://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "4571222f6rthswfg9981fr56",
            date: "7/12/2020",
            amount: 14,
            invoice: "http://www.africau.edu/images/default/sample.pdf",
          },
        ],
        email: "jvictorddo@gmail.com",
        image: "https://i.imgur.com/gt7dWQ7.jpg",
      };
    },
    onUpdateImage(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user = { ...state.user, image: action.payload };
      }
    },
    onUpdateProfile(state, action: PayloadAction<Profile>) {
      if (state.user) {
        state.user = {
          ...state.user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
        };
      }
    },
    onUpdatePlan(state, action: PayloadAction<0 | 1 | 2 | 3>) {
      if (state.user) {
        state.user = { ...state.user, plan: action.payload };
      }
    },
    onLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {
  onLogin,
  onLogout,
  onUpdatePlan,
  onUpdateImage,
  onUpdateProfile,
} = authSlice.actions;
export default authSlice.reducer;

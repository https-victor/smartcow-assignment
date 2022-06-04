import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Plan {
  Free = 'Free',
  Pro = 'Pro',
  Team = 'Team',
  Agency = 'Agency'
}

interface Billing {
  id: string;
  date: string;
  amount: number;
  invoice: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  plan: Plan;
  billings: Billing[];
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state) {
      state.isLoggedIn = true;
      state.user = {
        firstName: 'Victor',
        lastName: 'Oliveira',
        plan: Plan.Team,
        billings: [
          {
            id: '4571222f6rthswfg9981fr54',
            date: '7/12/2020',
            amount: 28,
            invoice: 'http://www.africau.edu/images/default/sample.pdf'
          },
          {
            id: '4571222f6rthswfg9981fr55',
            date: '7/12/2020',
            amount: 36,
            invoice: 'http://www.africau.edu/images/default/sample.pdf'
          },
          {
            id: '4571222f6rthswfg9981fr56',
            date: '7/12/2020',
            amount: 14,
            invoice: 'http://www.africau.edu/images/default/sample.pdf'
          }
        ],
        email: 'jvictorddo@gmail.com',
        image: 'https://i.imgur.com/gt7dWQ7.jpg'
      };
    },
    onUpdatePlan(state, action: PayloadAction<Plan>) {
      state.user = state.user ? { ...state.user, plan: action.payload } : null;
    },
    onLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;

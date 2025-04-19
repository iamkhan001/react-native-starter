import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@context/auth/auth.types';

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    accessToken: string | null;
  }

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      },
  },
});

export const { login, logout, updateAccessToken, updateUser } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'authReducer',
  initialState: { email: '', googleAuth: {} },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGoogleAuth: (state, action) => {
      state.googleAuth = action.payload;
    },
  },
});

export const { setEmail, setGoogleAuth } = auth.actions;
export const authReducer = auth.reducer;

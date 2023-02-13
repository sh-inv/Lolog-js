import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'authReducer',
  initialState: { email: '' },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = auth.actions;
export const authReducer = auth.reducer;

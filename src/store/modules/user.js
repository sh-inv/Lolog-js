import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userReducer',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export const userReducer = user.reducer;

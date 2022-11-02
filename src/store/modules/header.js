import { createSlice } from '@reduxjs/toolkit';

const themeModeSlice = createSlice({
  name: 'themeModeReducer',
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    darkMode: state => {
      state.isDarkMode = true;
    },
    lightMode: state => {
      state.isDarkMode = false;
    },
  },
});

export const { darkMode, lightMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;

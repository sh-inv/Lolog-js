import { createSlice } from '@reduxjs/toolkit';

const themeModeSlice = createSlice({
  name: 'themeModeReducer',
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    darkMode: state => {
      state.isDarkMode = true;
      console.log('dark on');
    },
    lightMode: state => {
      state.isDarkMode = false;
      console.log('light on');
    },
  },
});

export const { darkMode, lightMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;

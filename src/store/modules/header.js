import { createSlice } from '@reduxjs/toolkit';

const themeModeSlice = createSlice({
  name: 'themeModeReducer',
  initialState: {
    isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')),
  },
  reducers: {
    darkMode: state => {
      localStorage.setItem('isDarkMode', true);
      state.isDarkMode = true;
      document.body.dataset.theme = 'dark';
    },
    lightMode: state => {
      localStorage.setItem('isDarkMode', false);
      state.isDarkMode = false;
      document.body.dataset.theme = 'light';
    },
  },
});

export const { darkMode, lightMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;

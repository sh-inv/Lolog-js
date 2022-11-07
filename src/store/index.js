import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
  },
});

export default store;

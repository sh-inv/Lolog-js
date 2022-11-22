import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';
import { userReducer } from './modules/user';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    user: userReducer,
  },
});

export default store;

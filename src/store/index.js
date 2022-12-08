import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';
import { userReducer } from './modules/user';
import { detailPageReducer } from './modules/detailPage';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    detailData: detailPageReducer,
    user: userReducer,
  },
});

export default store;

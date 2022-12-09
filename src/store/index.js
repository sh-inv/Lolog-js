import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';
import { userReducer } from './modules/user';
import { detailPageReducer } from './modules/detailPage';
import { authReducer } from './modules/auth';
import { seriesReducer } from './modules/seriespostlist';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    detailData: detailPageReducer,
    user: userReducer,
    auth: authReducer,
    seriesPostList: seriesReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';
import { userReducer } from './modules/user';
import { detailPageReducer } from './modules/detailpage';
import { authReducer } from './modules/auth';
import { seriesReducer } from './modules/seriespostlist';
import { myLologReducer } from './modules/mylologpostlist';
import { mainNavBarReducer } from './modules/mainnavbar';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    detailData: detailPageReducer,
    user: userReducer,
    auth: authReducer,
    seriesPostList: seriesReducer,
    myLologData: myLologReducer,
    mainNavBar: mainNavBarReducer,
  },
});

export default store;

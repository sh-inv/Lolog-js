import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    // detailPageData: detailPageDataReducer,
  },
});

export default store;

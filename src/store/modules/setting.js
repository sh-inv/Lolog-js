import { configureStore, createSlice } from '@reduxjs/toolkit';

const social = createSlice({
  name: 'title',
  initialState: 'false',
});

export default configureStore({
  reducer: {
    social: social.reducer,
  },
});

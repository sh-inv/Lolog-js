import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: 'Eden21',
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});

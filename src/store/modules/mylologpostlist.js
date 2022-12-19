import { createSlice } from '@reduxjs/toolkit';

const myLologSlice = createSlice({
  name: 'myLolog',
  initialState: { posts: [], tags: [], user: {} },
  reducers: {
    setMyLologData: (state, action) => {
      state.posts = action.payload.posts;
      state.tags = action.payload.tags;
      state.user = action.payload.user;
    },
    setIsFollowed: (state, action) => {
      state.user.is_follower = action.payload;
    },
  },
});

export const { setMyLologData, setIsFollowed } = myLologSlice.actions;
export const myLologReducer = myLologSlice.reducer;

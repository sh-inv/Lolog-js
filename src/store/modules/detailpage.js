import { createSlice } from '@reduxjs/toolkit';

export const detailPageReducer = createSlice({
  name: 'detailData',
  initialState: { postData: null, commentsData: [] },
  reducers: {
    getDetailData: (state, action) => {
      state.postData = action.payload;
      state.commentsData = action.payload.comments;
    },
    getNewCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const { getDetailData, getNewCommentsData } = detailPageReducer.actions;

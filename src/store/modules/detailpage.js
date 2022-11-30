import { createSlice } from '@reduxjs/toolkit';

export const detailPageReducer = createSlice({
  name: 'detailData',
  initialState: { postData: '', commentsData: [] },
  reducers: {
    getDetailData: (state, action) => {
      state.postData = action.payload;
      state.commentsData = action.payload.comments;
    },
  },
});

export const { getDetailData } = detailPageReducer.actions;

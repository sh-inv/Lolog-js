import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: null,
  commentsData: null,
  commentLengthData: 0,
};

const detailPageSlice = createSlice({
  name: 'detailDataReducer',
  initialState: initialState,
  reducers: {
    setDetailPostData: (state, action) => {
      state.postData = action.payload;
    },
    setDetailCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
    setDetailCommentsLengthData: (state, action) => {
      state.commentLengthData = action.payload;
    },
    initialize: () => initialState,
  },
});

export const { setDetailPostData, setDetailCommentsData, setDetailCommentsLengthData, initialize } = detailPageSlice.actions;
export const detailPageReducer = detailPageSlice.reducer;

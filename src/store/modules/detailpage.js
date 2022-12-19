import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postData: null,
  commentsData: null,
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
    initialize: () => initialState,
  },
});

export const { setDetailPostData, setDetailCommentsData, initialize } = detailPageSlice.actions;
export const detailPageReducer = detailPageSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const detailPageSlice = createSlice({
  name: 'detailData',
  initialState: { postData: null, commentsData: null },
  reducers: {
    setDetailPostData: (state, action) => {
      state.postData = action.payload;
    },
    setDetailCommentsData: (state, action) => {
      state.commentsData = action.payload;
    },
  },
});

export const { setDetailPostData, setDetailCommentsData } = detailPageSlice.actions;
export const detailPageReducer = detailPageSlice.reducer;

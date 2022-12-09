import { createSlice } from '@reduxjs/toolkit';

const detailPageSlice = createSlice({
  name: 'detailData',
  initialState: { postData: null },
  reducers: {
    setDetailData: (state, action) => {
      state.postData = action.payload;
    },
  },
});

export const { setDetailData } = detailPageSlice.actions;
export const detailPageReducer = detailPageSlice.reducer;

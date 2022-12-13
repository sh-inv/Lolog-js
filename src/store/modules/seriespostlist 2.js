import { createSlice } from '@reduxjs/toolkit';

const seriesPostList = createSlice({
  name: 'seriesReducer',
  initialState: { seriesPostList: [] },
  reducers: {
    setSeriesPostList: (state, action) => {
      state.seriesPostList = action.payload;
    },
  },
});

export const { setA, setSeriesPostList } = seriesPostList.actions;
export const seriesReducer = seriesPostList.reducer;

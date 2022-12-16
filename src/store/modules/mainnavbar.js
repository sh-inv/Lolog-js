import { createSlice } from '@reduxjs/toolkit';

const mainNavBar = createSlice({
  name: 'mainNavBarReducer',
  initialState: { name: '', query: '', pageNum: 1 },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    plusPageNum: state => {
      state.pageNum = state.pageNum + 1;
    },
    resetPageNum: state => {
      state.pageNum = 1;
    },
  },
});

export const { setName, setQuery, plusPageNum, resetPageNum } = mainNavBar.actions;
export const mainNavBarReducer = mainNavBar.reducer;

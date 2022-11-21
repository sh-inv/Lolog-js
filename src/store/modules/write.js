import { createSlice } from '@reduxjs/toolkit';

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: {
    title: '',
    content: '',
    imageFileUrl: null,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setImageFileUrl: (state, action) => {
      state.imageFileUrl = action.payload;
    },
  },
});

export const { setTitle, setContent, setImageFileUrl } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: {
    title: '',
    content: '',
    thumbnail: '',
    imageFileUrl: null,
    selectedTool: null,
    isReverse: false,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setThmbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    setImageFileUrl: (state, action) => {
      state.imageFileUrl = action.payload;
    },
    setSelectedTool: (state, action) => {
      state.selectedTool = action.payload;
    },
    reversePosition: state => {
      state.isReverse = !state.isReverse;
    },
  },
});

export const { setTitle, setContent, setThmbnail, setImageFileUrl, setSelectedTool, reversePosition } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;

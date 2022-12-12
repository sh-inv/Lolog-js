import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
  thumbnail: '',
  seriesId: null,
  uploadType: '1',
  uploadUrl: 'title',
  discription: '',
  isReverse: false,
  isUploadModal: false,
  isSeriesList: false,
};

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: initialState,
  reducers: {
    setWriteContent: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    initialize: () => initialState,
  },
});

export const { setWriteContent, initialize } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;

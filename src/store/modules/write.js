import { createSlice } from '@reduxjs/toolkit';

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: {
    title: '',
    content: [],
    thumbnail: '',
    seriesId: null,
    uploadType: '1',
    uploadUrl: 'title',
    discription: '',
    isReverse: false,
    isUploadModal: false,
    isSeriesList: false,
  },
  reducers: {
    setWriteContent: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
  },
});

export const { setWriteContent } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;

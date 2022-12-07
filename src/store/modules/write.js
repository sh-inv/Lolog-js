import { createSlice } from '@reduxjs/toolkit';

const writeContentSlice = createSlice({
  name: 'writeContentReducer',
  initialState: {
    title: '',
    content: [],
    thumbnail: '',
    thumbnailPreview: '',
    uploadType: '1',
    uploadUrl: 'title',
    seriesId: null,
    imageFileUrl: null,
    selectedTool: null,
    isReverse: false,
    isUploadModal: false,
    isSeriesList: false,
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
    setThmbnailPreview: (state, action) => {
      state.thumbnailPreview = action.payload;
    },
    setUploadType: (state, action) => {
      state.uploadType = action.payload;
    },
    setUploadUrl: (state, action) => {
      state.uploadUrl = action.payload;
    },
    setSeriesId: (state, action) => {
      state.seriesId = action.payload;
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
    setIsUploadModal: (state, action) => {
      state.isUploadModal = action.payload;
    },
    setIsSeriesList: (state, action) => {
      state.isSeriesList = action.payload;
    },
  },
});

export const { setTitle, setContent, setThmbnail, setThmbnailPreview, setUploadType, setUploadUrl, setSeriesId, setImageFileUrl, setSelectedTool, reversePosition, setIsUploadModal, setIsSeriesList } = writeContentSlice.actions;
export const writeContentReducer = writeContentSlice.reducer;

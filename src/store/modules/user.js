import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userReducer',
  initialState: {
    profileImage: null,
    name: '',
    intro: '',
    lologTitle: '',
    socialInfo: { email: '', github: '', twitter: '', facebook: '', url: '' },
    email: '',
  },
  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIntro: (state, action) => {
      state.intro = action.payload;
    },
    setLologTitle: (state, action) => {
      state.lologTitle = action.payload;
    },
    setSocialInfo: (state, action) => {
      state.socialInfo = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setProfileImage, setName, setIntro, setLologTitle, setSocialInfo, setEmail } = user.actions;
export const userReducer = user.reducer;

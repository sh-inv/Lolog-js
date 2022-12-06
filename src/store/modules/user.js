import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userReducer',
  initialState: {
    id: null,
    profileImage: null,
    name: '',
    intro: '',
    title: '',
    email: '',
    commentAlert: 0,
    updateAlert: 0,
    socialInfoEmail: '',
    socialInfoGithub: '',
    socialInfoTwitter: '',
    socialInfoFacebook: '',
    socialInfoUrl: '',
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setId: (state, action) => {
      state.id = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIntro: (state, action) => {
      state.intro = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSocialInfo: (state, action) => {
      state.socialInfo = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCommentAlert: (state, action) => {
      state.commentAlert = action.payload;
    },
    setUpdateAlert: (state, action) => {
      state.updateAlert = action.payload;
    },
    setSocialInfoEmail: (state, action) => {
      state.socialInfoEmail = action.payload;
    },
    setSocialInfoGithub: (state, action) => {
      state.socialInfoGithub = action.payload;
    },
    setSocialInfoTwitter: (state, action) => {
      state.socialInfoTwitter = action.payload;
    },
    setSocialInfoFacebook: (state, action) => {
      state.socialInfoFacebook = action.payload;
    },
    setSocialInfoUrl: (state, action) => {
      state.socialInfoUrl = action.payload;
    },
  },
});

export const { setUser, setId, setProfileImage, setName, setIntro, setTitle, setSocialInfo, setEmail, setCommentAlert, setUpdateAlert, setSocialInfoEmail, setSocialInfoGithub, setSocialInfoTwitter, setSocialInfoFacebook, setSocialInfoUrl } =
  user.actions;
export const userReducer = user.reducer;

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
  },
});

export const { setUser, setId, setProfileImage, setName, setIntro, setTitle, setSocialInfo, setEmail, setCommentAlert, setUpdateAlert, setSocialInfoEmail, setSocialInfoGithub, setSocialInfoTwitter, setSocialInfoFacebook, setSocialInfoUrl } =
  user.actions;
export const userReducer = user.reducer;

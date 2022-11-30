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
    followCount: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export const userReducer = user.reducer;

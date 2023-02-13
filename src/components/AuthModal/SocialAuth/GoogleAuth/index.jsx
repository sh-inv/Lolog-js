import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiClient } from '../../../../api';
import { setGoogleAuth } from '../../../../store/modules/auth';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let googleCode = new URL(window.location.href).searchParams.get('code');

    const googleLogin = async () => {
      try {
        const { data } = await apiClient.get(`auth/google/callback?code=${googleCode}`);
        if (!data.token) {
          let obj = {};
          obj.email = data.user.email;
          obj.name = data.user.name;
          obj.profile_image = data.user.picture;
          dispatch(setGoogleAuth(obj));
          navigate('/register/google');
        } else {
          localStorage.setItem('authToken', data.token.token);
          localStorage.setItem('userId', data.token.id);
          localStorage.setItem('userProfileImg', data.token.profile_image);
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    };
    googleLogin();
  }, []);
};

export default GoogleAuth;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../../../api';

const Spinner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let googleCode = new URL(window.location.href).searchParams.get('code');

    const googleAuth = async () => {
      try {
        const {
          data: { token },
        } = await apiClient.get(`auth/google/callback?code=${googleCode}`);
        localStorage.setItem('authToken', token.token);
        localStorage.setItem('userId', token.id);
        localStorage.setItem('userProfileImg', token.profile_image);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    googleAuth();
  }, []);

  return <></>;
};

export default Spinner;

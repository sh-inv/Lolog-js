import styled from 'styled-components';
import { apiClient } from '../../../api';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const SocialAuth = ({ isSignUpModal }) => {
  const socialList = [
    {
      id: 5,
      name: 'github',
      icon: <AiOutlineGithub />,
    },
    {
      id: 6,
      name: 'google',
      icon: <FcGoogle />,
    },
    {
      id: 7,
      name: 'facebook',
      icon: <FaFacebookF />,
    },
  ];

  const onSocialLogin = async social => {
    const config = {
      headers: { 'Access-Control-Allow-origin': 'http://127.0.0.1:5173', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods': 'GET' },
      // xhrFields: {
      //   withCredentials: true,
      // },
    };
    try {
      const resp = await apiClient.get(`auth/${social}`, config);
      console.log(resp);
    } catch (error) {
      console.log('소셜로그인', error);
    }
  };

  const onSocialSignUp = async social => {
    // const config = {
    //   headers: { 'Access-Control-Allow-origin': 'http://127.0.0.1:5173', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods': 'GET' },
    // };
    try {
      const resp = await apiClient.post(`auth/signup?type=${social}`);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SocialAuthContainer>
      {socialList.map(social => {
        return (
          <a
            key={social.id}
            className={social.name}
            tabIndex={social.id}
            onClick={() => {
              // if (!isSignUpModal) {
              onSocialLogin(social.name);
              //   return;
              // } else if (isSignUpModal) {
              //   onSocialSignUp(social.name);
              //   console.log('회원가입모달', isSignUpModal);
              // }
            }}
          >
            {social.icon}
          </a>
        );
      })}
    </SocialAuthContainer>
  );
};

const SocialAuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;

  svg {
    font-size: 20px;
  }

  .github {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: rgb(39, 46, 51);
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: #fff;
  }

  .google {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: #fff;
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: fff;
    border: 1px solid var(--border3);
  }

  .facebook {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    background: rgb(59, 89, 152);
    border-radius: 1.5rem;
    outline: none;
    transition: all 0.125s ease-in 0s;
    color: #fff;
  }
`;

export default SocialAuth;

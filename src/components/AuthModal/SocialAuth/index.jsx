import styled from 'styled-components';
import { apiClient } from '../../../api';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { GOOGLE_URL } from './OAuth';

const SocialAuth = () => {
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
    try {
      if (social === 'google') {
        location.href = GOOGLE_URL;
      } else {
        await apiClient.get(`auth/${social}`);
      }
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
              onSocialLogin(social.name);
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
    cursor: pointer;
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
    color: #fff;
    border: 1px solid var(--border3);
    cursor: pointer;
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
    cursor: pointer;
  }
`;

export default SocialAuth;

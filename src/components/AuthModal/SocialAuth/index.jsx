import { useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const SocialAuth = () => {
  const onSocialLogin = async () => {
    const config = {
      headers: { 'Access-Control-Allow-origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE' },
    };
    try {
      const resp = await apiClient.get('auth/github', config);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SocialAuthContainer>
      <a className='github' tabIndex='5' onClick={onSocialLogin}>
        <AiOutlineGithub />
      </a>
      <a className='google' tabIndex='6'>
        <FcGoogle />
      </a>
      <a className='facebook' tabIndex='7'>
        <FaFacebookF />
      </a>
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

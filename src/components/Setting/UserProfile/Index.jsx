import { useState } from 'react';
import Button from '../../Button';
import EditButton from '../../EditButton';
import profile from '../../../assets/profile_sample.jpg';
import styled from 'styled-components';
import { backgroundElement1, border3, border4, text2, text3 } from '../../../styles/color';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <img alt='profile' src={profile} />
      <Button text='이미지 업로드' backgroundColor='#96F2D7' color='#121212' hoverBackground='#63E6BE' />
      <Button text='이미지 제거' backgroundColor='transparent' color='#96F2D7' hoverColor='#63E6BE' hoverBackground='#ffffff1A' />
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  img {
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: block;
    margin-bottom: 1.25rem;
  }

  button + button {
    margin-top: 0.5rem;
    margin-left: 0px;
  }
`;

export default UserProfile;

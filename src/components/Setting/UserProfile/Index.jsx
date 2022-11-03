import { useState, useEffect } from 'react';
import Button from '../../Button/Index';
import ModifyButton from '../ModifyButton/Index';
import profile from '../../../assets/profile_sample.jpg';
import styled from 'styled-components';

const UserProfileContainer = ({ modify, setModify, onModify }) => {
  const [user, setUser] = useState('');
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    // fetch =>user info
    const profile = { user: 'Eden', introduction: 'one part' };

    setUser(profile.user);
    setIntroduction(profile.introduction);
  }, []);

  const getUser = e => {
    setUser(e.target.value);
  };

  const getIntro = e => {
    setIntroduction(e.target.value);
  };

  return (
    <ProfileContainer>
      <div className='thumbnail-area'>
        <img alt='profile' src={profile} />
        <Button text='이미지 업로드' backgroundColor='#12b886' color='#fff' />
        <Button text='이미지 제거' backgroundColor='transparent' color='#12b886' />
      </div>
      <div className='info-area'>
        {modify ? <input className='modify-input modify-user' type='text' onChange={getUser} value={user} /> : <h2>Eden</h2>}
        {modify ? <input className='modify-input modify-intro' type='text' onChange={getIntro} value={introduction} /> : <p>one part.</p>}
        {modify ? (
          <Button
            onClick={() => {
              setModify(false);
            }}
            text='저장'
            backgroundColor='#12b886'
            color='#fff'
          />
        ) : (
          <ModifyButton onModify={onModify} />
        )}
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.section`
  display: flex;
  height: 13.75rem;

  .thumbnail-area {
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
  }

  .info-area {
    flex: 1 1 0%;
    padding-left: 1.5rem;
    border-left: 1px solid #f1f3f5;

    h2 {
      margin: 0px;
      line-height: 1.5;
      font-size: 2.25rem;
    }

    p {
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      line-height: 1.5;
      font-size: 1rem;
      color: #868e96;
    }

    .modify-input {
      display: block;
      width: 100%;
      padding: 0.5rem;

      border: 1px solid #dee2e6;
      border-radius: 4px;
      background: #ffffff;
      color: #495057;
      font-size: 1rem;
      line-height: 1rem;
      outline: none;
    }

    .modify-user {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .modify-intro {
      margin: 1rem 0;
    }
  }
`;

export default UserProfileContainer;

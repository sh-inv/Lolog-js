import { useState, useEffect } from 'react';
import Button from '../../Button';
import EditButton from '../../EditButton';
import profile from '../../../assets/profile_sample.jpg';
import styled from 'styled-components';
import { backgroundElement1, border3, border4, text2, text3 } from '../../../styles/color';

const UserProfile = () => {
  const [user, setUser] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [modify, setModify] = useState(false);

  const onModify = () => {
    modify ? setModify(false) : setModify(true);
  };

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
        <Button text='이미지 업로드' backgroundColor='#96F2D7' color='#121212' hoverBackground='#63E6BE' />
        <Button text='이미지 제거' backgroundColor='transparent' color='#96F2D7' hoverColor='#63E6BE' hoverBackground='#ffffff1A' />
      </div>
      <div className='info-area'>
        {modify ? (
          <>
            <input className='modify-input modify-user' type='text' placeholder='이름' onChange={getUser} value={user} />
            <input className='modify-input modify-intro' type='text' placeholder='한 줄 소개' onChange={getIntro} value={introduction} />
            <Button
              onClick={() => {
                setModify(false);
              }}
              text='저장'
              backgroundColor='#96F2D7'
              color='#121212'
            />
          </>
        ) : (
          <>
            <h2>Eden</h2> <p>one part.</p>
            <EditButton text='수정' onModify={onModify} />
          </>
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

    button + button {
      margin-top: 0.5rem;
      margin-left: 0px;
    }
  }

  .info-area {
    flex: 1 1 0%;
    padding-left: 1.5rem;
    border-left: 1px solid ${border4};

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
      color: ${text3};
    }

    .modify-input {
      display: block;
      width: 100%;
      padding: 0.5rem;

      border: 1px solid ${border3};
      border-radius: 4px;
      background: ${backgroundElement1};
      color: ${text2};
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

export default UserProfile;

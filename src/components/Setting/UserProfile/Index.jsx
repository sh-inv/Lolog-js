import { useState, useEffect } from 'react';
import Button from '../../Button/Index';
import profile from '../../../assets/profile_sample.jpg';
import styled from 'styled-components';

const UserProfileContainer = () => {
  const [username, setUsername] = useState('');
  const [modify, setModify] = useState(false);

  useEffect(() => {
    // fetch =>user info
    const user = { user: 'Eden' };
    setUsername(user.user);
  }, []);

  return (
    <ProfileContainer>
      <div className='thumbnail-area'>
        <img alt='profile' src={profile} />
        <Button text='이미지 업로드' backgroundColor='#12b886' color='#fff' />
        <Button text='이미지 제거' backgroundColor='transparent' color='#12b886' />
      </div>
      <div className='info-area'>
        {modify ? (
          <input
            type='text'
            onChange={e => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        ) : (
          <h2>Eden</h2>
        )}
        <p>one part.</p>
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
          <button
            onClick={() => {
              if (!modify) {
                setModify(true);
                return;
              }
              // api request
              setModify(false);
            }}
          >
            수정
          </button>
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

    button {
      display: inline;
      padding: 0px;

      background: none;
      border: none;
      font-size: 1rem;
      line-height: 1.5;
      color: #12b886;
      text-decoration: underline;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default UserProfileContainer;

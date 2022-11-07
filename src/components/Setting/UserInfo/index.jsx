import { useState, useEffect } from 'react';
import EditButton from '../../EditButton';
import Button from '../../Button';
import styled from 'styled-components';
import { backgroundElement1, border1, border3, border4, text2, text3 } from '../../../styles/color';

const UserInfo = () => {
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
    <UserInfoContainer>
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
          <EditButton text='수정' onClick={onModify} />
        </>
      )}
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
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

    :focus {
      border: 1px solid ${border1};
    }
  }

  .modify-user {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .modify-intro {
    margin: 1rem 0;
  }
`;

export default UserInfo;

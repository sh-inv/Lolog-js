import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../store/modules/user';
import styled from 'styled-components';
import EditButton from '../../../components/EditButton';
import Button from '../../../components/Button';
import { UserIntroMaxWidth768px, UserIntroTitleMaxWidth768px } from '../../../styles/media';

const UserIntro = () => {
  const [isModify, setIsModify] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const onModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };

  const getName = e => {
    dispatch(
      setUser({
        ...user,
        name: e.target.value,
      })
    );
  };

  const getIntro = e => {
    dispatch(
      setUser({
        ...user,
        about_me: e.target.value,
      })
    );
  };

  return (
    <UserIntroContainer>
      {isModify ? (
        <>
          <input className='modify-input modify-user' type='text' placeholder='이름' onChange={getName} value={user?.name} />
          <input className='modify-input modify-intro' type='text' placeholder='한 줄 소개' onChange={getIntro} value={user?.about_me} />
          <Button
            className='confirm-button'
            onClick={() => {
              setIsModify(false);
            }}
            text='저장'
          />
        </>
      ) : (
        <>
          <h2>{user?.name}</h2>
          <p>{user?.about_me}</p>
          <EditButton text='수정' onClick={onModify} />
        </>
      )}
    </UserIntroContainer>
  );
};

const UserIntroContainer = styled.div`
  flex: 1 1 0%;
  padding-left: 1.5rem;
  border-left: 1px solid var(--border4);

  ${UserIntroMaxWidth768px};

  .modify-input {
    display: block;
    width: 100%;
    padding: 0.5rem;

    border: 1px solid var(--border3);
    border-radius: 4px;
    background: var(--bg-element1);
    color: var(--text2);
    font-size: 1rem;
    line-height: 1rem;
    outline: none;

    :focus {
      border: 1px solid var(--border1);
    }
  }

  .modify-user {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .modify-intro {
    margin: 1rem 0;
  }

  .confirm-button {
    background: var(--primary1);
    color: var(--button-text);

    &:hover {
      background: var(--primary2);
    }
  }

  h2 {
    margin: 0px;
    line-height: 1.5;
    font-size: 2.25rem;

    ${UserIntroTitleMaxWidth768px};
  }

  p {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--text3);
  }
`;

export default UserIntro;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Button from '../../Button';
import Toastify from '../../../components/Toastify';

const SignUpForm = ({ setIsLoginModal }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailAuth, setIsEmailAuth] = useState(false);

  const getEmail = e => {
    const emailRegax = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegax.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const error = () => toast.error('이메일 형식을 확인해주세요!');
  const getAuth = () => {
    toast.info('인증 메일을 확인해주세요');
    setIsEmailAuth(true);
  };

  const goRegister = () => {
    navigate('/register');
    setIsLoginModal(false);
  };

  return (
    <SignUpFormContainer>
      <div className='input-wrapper'>
        <input type='text' tabIndex='2' placeholder='이메일을 입력하세요.' onChange={getEmail} value={email} />
        <Button className='sign-up-button' text='중복확인' color='teal' onClick={isEmail ? getAuth : error} tabIndex='4' />
      </div>
      {isEmailAuth ? (
        <div className='auth-wrapper'>
          <h3>인증번호</h3>
          <div className='auth-input'>
            <input type='text' tabIndex='5' placeholder='인증번호를 입력하세요.' maxLength={4} />
            <Button type='submit' className='login-button' text='인증' color='teal' tabIndex='6' onClick={goRegister} />
          </div>
        </div>
      ) : null}
      <Toastify />
    </SignUpFormContainer>
  );
};

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-wrapper {
    display: flex;
    height: 3rem;

    input {
      flex: 1 1 0%;
      padding: 1rem;
      background: var(--bg-element1);
      border: 1px solid var(--border3);
      border-right: none;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      color: var(--text1);
      font-size: 1rem;
      outline: none;

      :focus {
        border: 1px solid var(--primary1);
        border-right: none;
      }
    }
  }

  .auth-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: var(--text3);
    }

    .auth-input {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-left: 0.5rem;
      border-bottom: 1px solid var(--border3);

      :focus {
        border: 1px solid var(--primary1);
      }

      input {
        flex: 1 1 0%;
        background: none;
        border: none;
        color: var(--text1);

        :focus {
          border-bottom: 1px solid var(--primary1);
        }
      }

      button {
        border-radius: 0;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
    }
  }

  .input-wrapper + .auth-wrapper {
    margin-top: 1rem;
  }

  .sign-up-button {
    border-radius: 0 2px 2px 0%;
    width: 6rem;
    height: 100%;
    word-break: keep-all;
  }
`;

export default SignUpForm;

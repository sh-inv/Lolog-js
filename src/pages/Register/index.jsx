import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { apiClient } from '../../api';
import GoogleForm from './GoogleForm';
import EmailForm from './EmailForm';
import Button from '../../components/Button';
import Toastify from '../../components/Toastify';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, googleAuth } = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfrim] = useState('');
  const [intro, setIntro] = useState('');

  const [nameMessage, setNameMessage] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfrimMessage, setPasswordConfrimMessage] = useState('');

  const [isName, setIsName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [isIdDuplicateCheck, setIsIdDuplicateCheck] = useState(false);

  const [isActiveFocus, setIsActiveFocus] = useState({
    nameActive: false,
    idActive: false,
    passwordActive: false,
    passwordConfirmActive: false,
    introActive: false,
  });

  const handleName = e => {
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (nameCurrent.length < 1) {
      setNameMessage('이름을 입력해주세요');
      setIsName(false);
    } else {
      setNameMessage('');
      setIsName(true);
    }
  };
  const handleId = e => {
    const idRegax = /^[a-zA-Z0-9]{4,15}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);
    if (!idRegax.test(idCurrent)) {
      setIdMessage('아이디는 4자 이상의 영어와 숫자로 구성해야합니다');
      setIsId(false);
    } else {
      setIdMessage('');
      setIsId(true);
    }
  };

  const handlePassword = e => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자 + 영문자 조합으로 8자 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  };

  const handlePasswordConfirm = e => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfrim(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setPasswordConfrimMessage('');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfrimMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요!');
      setIsPasswordConfirm(false);
    }
  };
  const handleIntro = e => setIntro(e.target.value);

  const { nameActive, idActive, passwordActive, passwordConfirmActive, introActive } = isActiveFocus;

  const handleFocus = focus => {
    setIsActiveFocus({
      ...isActiveFocus,
      [focus]: true,
    });
  };

  const handleBlur = focus => {
    setIsActiveFocus({
      ...isActiveFocus,
      [focus]: false,
    });
  };

  const onIdDuplicateCheck = async () => {
    const body = {
      login_id: id,
    };
    try {
      await apiClient.post('auth/login_id', body);
      setIsIdDuplicateCheck(true);
      toast.success('사용할 수 있는 아이디 입니다.');
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('이미 사용 중인 아이디입니다.');
      }
    }
  };

  const onRegister = async () => {
    const body = {
      name: name,
      email: email,
      login_id: id,
      password: password,
      about_me: intro,
    };
    try {
      const { data } = await apiClient.post('auth/signup?type=email', body);
      const { token, id, profile_image } = data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('userProfileImg', profile_image);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onGoogleRegister = async () => {
    const body = { ...googleAuth, login_id: id, about_me: intro };
    try {
      const { data } = await apiClient.post('auth/signup?type=google', body);
      const { token, id, profile_image } = data;
      console.log(profile_image);
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('userProfileImg', profile_image);
      navigate('/');
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        toast.error(`이미 사용 중인 아이디입니다.`);
      }
    }
  };

  return (
    <RegisterContainer>
      <h1>환영합니다!</h1>
      <div className='description'>
        기본 회원 정보를 등록해주세요. <span>﹡는 필수항목 입니다.</span>
      </div>
      {location.pathname === '/register' && (
        <EmailForm
          nameActive={nameActive}
          idActive={idActive}
          passwordActive={passwordActive}
          passwordConfirmActive={passwordConfirmActive}
          introActive={introActive}
          name={name}
          email={email}
          id={id}
          password={password}
          passwordConfirm={passwordConfirm}
          intro={intro}
          handleName={handleName}
          handleId={handleId}
          isIdDuplicateCheck={isIdDuplicateCheck}
          onIdDuplicateCheck={onIdDuplicateCheck}
          handlePassword={handlePassword}
          handlePasswordConfirm={handlePasswordConfirm}
          handleIntro={handleIntro}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          nameMessage={nameMessage}
          idMessage={idMessage}
          passwordMessage={passwordMessage}
          passwordConfrimMessage={passwordConfrimMessage}
        />
      )}
      {location.pathname === '/register/google' && (
        <GoogleForm
          nameActive={nameActive}
          idActive={idActive}
          introActive={introActive}
          name={googleAuth.name}
          email={googleAuth.email}
          id={id}
          intro={intro}
          handleName={handleName}
          handleId={handleId}
          handleIntro={handleIntro}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          nameMessage={nameMessage}
          idMessage={idMessage}
          isIdDuplicateCheck={isIdDuplicateCheck}
          onIdDuplicateCheck={onIdDuplicateCheck}
        />
      )}
      <div className='form-bottom'>
        <div className='all-valid'>{location.pathname === '/register' ? !(isName && isId && isPassword && isPasswordConfirm) && '모든 필수 항목을 입력해주세요' : !isId && '아이디를 입력해주세요'}</div>
        <div className='button-wrapper'>
          <Button className='cancel' text='취소' color='gray' onClick={() => navigate('/')} />
          <Button
            className='next'
            text='다음'
            color='teal'
            disabled={location.pathname === '/register' ? !(isName && isId && isIdDuplicateCheck && isPassword && isPasswordConfirm) : !(isId && isIdDuplicateCheck)}
            onClick={location.pathname === '/register' ? onRegister : onGoogleRegister}
          />
        </div>
      </div>
      <Toastify />
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  width: 768px;
  margin: 100px auto 0px;
  line-height: 1.5;

  h1 {
    margin: 0;
    font-size: 4rem;
    color: var(--text1);
    font-weight: bolder;
  }

  .description {
    font-size: 1.5rem;
    color: var(--text1);

    span {
      font-size: 1rem;
    }
  }

  .contents {
    margin-top: 3rem;
    margin-bottom: 3rem;

    .wrapper {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 1rem;
        color: var(--text1);
        line-height: 1.5;
        font-weight: bold;
        font-size: 1.125rem;
        transition: all 0.125s ease-in 0s;
      }

      .input-wrapper {
        display: flex;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border2);

        input {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text2);
          line-height: 1.5;
          font-size: 1.5rem;
          transition: all 0.125s ease-in 0s;
        }

        input:disabled {
          color: var(--text3);
        }

        svg {
          font-size: 1.5rem;
          color: var(--text3);
        }

        .duplicate {
          display: block;
          width: 7rem;
        }

        .checked {
          display: block;
          width: 7rem;
          pointer-events: none;
        }
      }

      .validation {
        margin: 0.25rem 0;
        font-size: 1rem;
        line-height: 1.5;
        color: rgb(255, 107, 107);
        font-weight: bold;
      }
    }

    .focus-wrapper {
      label {
        color: var(--primary2);
      }

      .input-wrapper {
        border-bottom: 1px solid var(--primary2);

        input {
          color: var(--primary2);
        }
      }
    }

    .email-wrapper {
      pointer-events: none;
    }
  }

  .form-bottom {
    margin-top: 3rem;

    .all-valid {
      font-size: 1.25rem;
      line-height: 1.5;
      color: rgb(255, 107, 107);
      font-weight: bold;
    }

    .button-wrapper {
      button {
        height: 3rem;
        font-size: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 1.5rem;
        word-break: keep-all;
        transition: all 0.125s ease-in 0s;
      }

      button + button {
        margin-left: 1rem;
      }

      .next {
        :disabled {
          opacity: 0.5;

          &:hover {
            background: var(--primary1);
          }
        }
      }
    }
  }
`;

export default Register;

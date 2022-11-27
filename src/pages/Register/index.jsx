import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import { TfiCheckBox } from 'react-icons/tfi';
import Button from '../../components/Button';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();
  //이름, 이메일, 아이디(롤로그 제목), 비밀번호, 소개글 확인
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfrim] = useState('');
  const [intro, setIntro] = useState('');
  //오류메세지 상태저장
  const [nameMessage, setNameMessage] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfrimMessage, setPasswordConfrimMessage] = useState('');
  //유효성 검사
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
      setIdMessage('아이디 형식이 틀렸습니다. 영어와 숫자로 구성해야합니다. 다시 한번 확인해주세요');
      setIsId(false);
      // } else if (idCurrent.length >= 4) {
      //   setIdMessage('아이디 중복 여부를 확인 해주세요');
      //   setIsId(false);
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
      setPasswordConfrimMessage('비밀번호가 일치합니다!');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfrimMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요!');
      setIsPasswordConfirm(false);
    }
  };
  const handleIntro = e => setIntro(e.target.value);

  const onDuplicateCheck = () => {
    setIsIdDuplicateCheck(true);
  };

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

  return (
    <RegisterContainer>
      <h1>환영합니다!</h1>
      <div className='description'>
        기본 회원 정보를 등록해주세요. <span>﹡는 필수항목 입니다.</span>
      </div>
      <div className='contents'>
        <div className={nameActive ? 'focus-wrapper wrapper' : 'wrapper'}>
          <label>이름 ﹡</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='이름을 입력하세요' onChange={handleName} value={name} maxLength='20' onFocus={() => handleFocus('nameActive')} onBlur={() => handleBlur('nameActive')} />
          </div>
          <div className='validation'>{nameMessage}</div>
        </div>
        <div className='wrapper  email-wrapper'>
          <label>이메일</label>
          <div className='input-wrapper'>
            <input type='text' disabled value='lolog@email.com' />
            <MdLockOutline />
          </div>
        </div>
        <div className={idActive ? 'focus-wrapper wrapper' : 'wrapper'}>
          <label>아이디 ﹡</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='아이디를 입력하세요' onChange={handleId} value={id} onFocus={() => handleFocus('idActive')} onBlur={() => handleBlur('idActive')} />
            <Button className='duplicate' text={<TfiCheckBox className={isIdDuplicateCheck ? 'checked-icon' : ''} />} onClick={onDuplicateCheck} />
          </div>
          <div className='validation'>{idMessage}</div>
        </div>
        <div className={passwordActive ? 'focus-wrapper wrapper' : 'wrapper'}>
          <label>비밀번호 ﹡</label>
          <div className='input-wrapper'>
            <input type='password' placeholder='비밀번호를 입력하세요' onChange={handlePassword} value={password} maxLength='16' onFocus={() => handleFocus('passwordActive')} onBlur={() => handleBlur('passwordActive')} />
          </div>
          <div className='validation'>{passwordMessage}</div>
        </div>
        <div className={passwordConfirmActive ? 'focus-wrapper wrapper' : 'wrapper'}>
          <label>비밀번호 확인 ﹡</label>
          <div className='input-wrapper'>
            <input
              type='password'
              placeholder='비밀번호를 한번 더 입력하세요'
              onChange={handlePasswordConfirm}
              value={passwordConfirm}
              maxLength='16'
              onFocus={() => handleFocus('passwordConfirmActive')}
              onBlur={() => handleBlur('passwordConfirmActive')}
            />
          </div>
          <div className='validation'>{passwordConfrimMessage}</div>
        </div>
        <div className={introActive ? 'focus-wrapper wrapper' : 'wrapper'}>
          <label>한 줄 소개</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='당신을 한 줄로 소개해보세요' onChange={handleIntro} value={intro} onFocus={() => handleFocus('introActive')} onBlur={() => handleBlur('introActive')} />
          </div>
        </div>
      </div>
      <div className='form-bottom'>
        <div className='all-valid'>{isName && isId && isPassword && isPasswordConfirm ? '' : '모든 필수 항목을 입력해주세요'}</div>
        <div className='button-wrapper'>
          <Button className='cancel' text='취소' color='gray' onClick={() => navigate('/')} />
          <Button className='next' text='다음' color='teal' disabled={!(isName && isId && isPassword && isPasswordConfirm)} onClick={() => navigate('/')} />
        </div>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  width: 768px;
  margin: 100px auto 0px;
  line-height: 1.5;

  h1 {
    font-size: 4rem;
    color: var(--text1);
    font-weight: bolder;
    margin: 0px;
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
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border2);
        display: flex;
        -webkit-box-align: center;
        align-items: center;

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

        .checked-icon {
          color: var(--primary2);
        }
      }

      .duplicate {
        padding: 0;
        background: none;
        color: var(--text3);
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import Button from '../../components/Button';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();
  //이름, 이메일, 비밀번호, 아이디(롤로그 제목), 소개글 확인
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfrim] = useState('');
  const [id, setId] = useState('');
  const [intro, setIntro] = useState('');
  //오류메세지 상태저장
  const [nameMessage, setNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfrimMessage, setPasswordConfrimMessage] = useState('');
  const [idMessage, setIdMessage] = useState('');
  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isId, setIsId] = useState(false);

  const handleName = e => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setNameMessage('이름을 입력해주세요');
      setIsName(false);
    } else {
      setNameMessage('멋있는 이름이에요 😎');
      setIsName(true);
    }
  };
  const handlePassword = e => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자 조합으로 8자 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호예요 :)');
      setIsPassword(true);
    }
  };
  const handlePasswordConfirm = e => setPasswordConfrim(e.target.value);
  const handleId = e => setId(e.target.value);
  const handleIntro = e => setIntro(e.target.value);

  return (
    <RegisterContainer>
      <h1>환영합니다!</h1>
      <div className='description'>기본 회원 정보를 등록해주세요.</div>
      <div className='contents'>
        <div className='wrapper'>
          <label>이름</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='이름을 입력하세요' onChange={handleName} value={name} maxLength='20' />
          </div>
          <div className='validation'>{nameMessage}</div>
        </div>
        <div className='wrapper'>
          <label>이메일</label>
          <div className='input-wrapper'>
            <input type='text' disabled value='me@email.me' />
            <MdLockOutline />
          </div>
        </div>
        <div className='wrapper'>
          <label>비밀번호</label>
          <div className='input-wrapper'>
            <input type='password' placeholder='비밀번호를 입력하세요' onChange={handlePassword} value={password} maxLength='16' />
          </div>
          <div className='validation'>{passwordMessage}</div>
        </div>
        <div className='wrapper'>
          <label>비밀번호 확인</label>
          <div className='input-wrapper'>
            <input type='password' placeholder='비밀번호를 한번 더 입력하세요' onChange={handlePasswordConfirm} value={passwordConfirm} maxLength='16' />
          </div>
          <div className='validation'>유효성 검사 문구가 나갑니다</div>
        </div>
        <div className='wrapper'>
          <label>아이디</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='아이디를 입력하세요' onChange={handleId} value={id} />
          </div>
          <div className='validation'>유효성 검사 문구가 나갑니다</div>
        </div>
        <div className='wrapper'>
          <label>한 줄 소개</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='당신을 한 줄로 소개해보세요' onChange={handleIntro} value={intro} />
          </div>
        </div>
      </div>
      <div className='validation'>유효성 검사 문구가 나갑니다</div>
      <div className='form-bottom'>
        <div className='button-wrapper'>
          <Button className='cancel' text='취소' onClick={() => navigate('/')} />
          <Button className='next' text='다음' />
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
  }

  .contents {
    margin-top: 3rem;
    margin-bottom: 3rem;

    .wrapper {
      margin-bottom: 1.5rem;

      &:active {
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
      }

      .validation {
        margin: 0.25rem 0;
        font-size: 1rem;
        line-height: 1.5;
        color: rgb(255, 107, 107);
        font-weight: bold;
      }
    }
  }

  .form-bottom {
    margin-top: 6rem;

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

      .cancel {
        background: var(--bg-element4);
        color: var(--text1);
      }

      .next {
        background: var(--primary1);
        color: var(--button-text);
      }
    }
  }
`;

export default Register;

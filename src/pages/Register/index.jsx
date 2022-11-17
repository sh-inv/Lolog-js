import { useNavigate } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import Button from '../../components/Button';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();

  return (
    <RegisterContainer>
      <h1>환영합니다!</h1>
      <div className='description'>기본 회원 정보를 등록해주세요.</div>
      <div className='contents'>
        <div className='wrapper'>
          <label>이름</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='이름을 입력하세요' />
          </div>
        </div>
        <div className='wrapper'>
          <label>이메일</label>
          <div className='input-wrapper'>
            <input type='text' className='email' disabled value='me@email.me' />
            <MdLockOutline />
          </div>
        </div>
        <div className='wrapper'>
          <label>아이디</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='아이디를 입력하세요' />
          </div>
        </div>
        <div className='wrapper'>
          <label>한 줄 소개</label>
          <div className='input-wrapper'>
            <input type='text' placeholder='당신을 한 줄로 소개해보세요' />
          </div>
        </div>
      </div>
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

import styled from 'styled-components';
import { MdLockOutline } from 'react-icons/md';
import Button from '../../../components/Button';

const GoogleForm = ({
  //
  nameActive,
  idActive,
  introActive,
  name,
  email,
  id,
  intro,
  handleId,
  handleIntro,
  handleFocus,
  handleBlur,
  nameMessage,
  idMessage,
  isIdDuplicateCheck,
  onIdDuplicateCheck,
}) => {
  return (
    <GoogleFormContainer>
      <div className={nameActive ? 'focus-wrapper wrapper' : 'wrapper'}>
        <label>이름</label>
        <div className='input-wrapper'>
          <input type='text' placeholder='이름을 입력하세요' disabled value={name} />
        </div>
        <div className='validation'>{nameMessage}</div>
      </div>
      <div className='wrapper email-wrapper'>
        <label>이메일</label>
        <div className='input-wrapper'>
          <input type='text' disabled value={email} />
          <MdLockOutline />
        </div>
      </div>
      <div className={idActive ? 'focus-wrapper wrapper' : 'wrapper'}>
        <label>아이디 ﹡</label>
        <div className='input-wrapper'>
          <input type='text' placeholder='아이디를 입력하세요' disabled={isIdDuplicateCheck === true} onChange={handleId} value={id} onFocus={() => handleFocus('idActive')} onBlur={() => handleBlur('idActive')} />
          {isIdDuplicateCheck ? <Button className='checked' disabled color='darkgray' text='완료' /> : <Button className='duplicate' color='teal' text='중복확인' onClick={onIdDuplicateCheck} />}
        </div>
        <div className='validation'>{idMessage}</div>
      </div>
      <div className={introActive ? 'focus-wrapper wrapper' : 'wrapper'}>
        <label>한 줄 소개</label>
        <div className='input-wrapper'>
          <input type='text' placeholder='당신을 한 줄로 소개해보세요' onChange={handleIntro} value={intro} onFocus={() => handleFocus('introActive')} onBlur={() => handleBlur('introActive')} />
        </div>
      </div>
    </GoogleFormContainer>
  );
};

const GoogleFormContainer = styled.div`
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
`;

export default GoogleForm;

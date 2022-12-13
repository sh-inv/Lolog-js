import styled from 'styled-components';
import { MdLockOutline } from 'react-icons/md';
import Button from '../../../components/Button';

const EmailForm = ({
  nameActive,
  idActive,
  passwordActive,
  passwordConfirmActive,
  introActive,
  name,
  email,
  id,
  password,
  passwordConfirm,
  intro,
  handleName,
  handleId,
  handlePassword,
  handlePasswordConfirm,
  isIdDuplicateCheck,
  onIdDuplicateCheck,
  handleIntro,
  handleFocus,
  handleBlur,
  nameMessage,
  idMessage,
  passwordMessage,
  passwordConfrimMessage,
}) => {
  return (
    <EmailFormContainer>
      <div className={nameActive ? 'focus-wrapper wrapper' : 'wrapper'}>
        <label>이름 ﹡</label>
        <div className='input-wrapper'>
          <input type='text' placeholder='이름을 입력하세요' onChange={handleName} value={name} maxLength='20' onFocus={() => handleFocus('nameActive')} onBlur={() => handleBlur('nameActive')} />
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
    </EmailFormContainer>
  );
};

const EmailFormContainer = styled.div`
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

export default EmailForm;

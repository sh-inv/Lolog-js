import Button from '../../Button';
import styled from 'styled-components';

const LoginForm = ({ title, onClick }) => {
  return (
    <LoginFormContainer>
      <input type='text' tabIndex='2' placeholder='이메일을 입력하세요.' />
      <input type='password' tabIndex='3' placeholder='비밀번호를 입력하세요.' />
      <Button className='login-button' text={title} onClick={onClick} tabIndex='4' />
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    flex: 1 1 0%;
    padding: 1rem;
    background: var(--bg-element1);
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border: 0.5px solid var(--border4);
    outline: none;
    font-size: 1rem;
    color: var(--text1);

    :focus {
      border: 1px solid var(--primary1);
    }
  }

  input + input {
    margin-top: 0.25rem;
  }

  button {
    height: 3rem;
    margin-top: 0.5rem;
    background: var(--primary1);
    outline: none;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    color: var(--button-text);
    font-size: 1rem;
    font-weight: bold;
    word-break: keep-all;
    cursor: pointer;
  }
`;

export default LoginForm;

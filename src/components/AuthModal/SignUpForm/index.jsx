import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import styled from 'styled-components';

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <SignUpFormContainer>
      <input type='text' tabIndex='2' placeholder='이메일을 입력하세요.' />
      <Button
        className='sign-up-button'
        text='중복확인'
        color='teal'
        onClick={() => {
          navigate('/register');
        }}
        tabIndex='4'
      />
    </SignUpFormContainer>
  );
};

const SignUpFormContainer = styled.form`
  width: 100%;
  display: flex;
  height: 3rem;

  input {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-size: 1rem;
    color: var(--text1);
    flex: 1 1 0%;
    padding: 1rem;
    background: var(--bg-element1);
    border: 1px solid var(--border3);
    border-right: none;
    outline: none;

    :focus {
      border: 1px solid var(--primary1);
    }
  }

  .sign-up-button {
    border-radius: 0 2px 2px 0%;
    width: 6rem;
    height: 100%;
    word-break: keep-all;
  }
`;

export default SignUpForm;

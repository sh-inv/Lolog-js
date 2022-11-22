import Button from '../../Button';
import styled from 'styled-components';

const SignUpForm = ({ title, onClick }) => {
  return (
    <SignUpFormContainer>
      <input type='text' tabIndex='2' placeholder='이메일을 입력하세요.' />
      <Button className='sign-up-button' text={title} onClick={onClick} tabIndex='4' />
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

  button {
    background: var(--primary1);
    color: var(--button-text);
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 0 2px 2px 0%;
    width: 6rem;
    height: 100%;
    word-break: keep-all;
    cursor: pointer;
  }
`;

export default SignUpForm;

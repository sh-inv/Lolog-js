import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Button from '../../Button';

const LoginForm = ({ onClick, onClose }) => {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const onChange = useCallback(
    e => {
      const { value, name } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form]
  );

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      const body = {
        login_id: form.id,
        passowrd: form.password,
      };
      try {
        const resp = await apiClient.post('/auth/login', body);
        if (resp.status === 200) {
          const { token } = resp.data;
          localStorage.setItem('authToken', token);
          setForm({
            id: '',
            password: '',
          });
          onClose();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [form]
  );

  return (
    <LoginFormContainer onSubmit={onSubmit}>
      <input type='text' name='id' required tabIndex='2' placeholder='아이디를 입력하세요.' onChange={onChange} value={form.email} />
      <input type='password' name='password' required tabIndex='3' placeholder='비밀번호를 입력하세요.' onChange={onChange} value={form.password} />
      <Button type='submit' className='login-button' text='로그인' color='teal' tabIndex='4' />
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
    border-radius: 2px;
    border: 0.5px solid var(--border3);
    outline: none;
    font-size: 1rem;
    color: var(--text1);

    :focus {
      outline: 1px solid var(--primary1);
    }
  }

  input + input {
    margin-top: 0.5rem;
  }

  button {
    height: 3rem;
    margin-top: 0.5rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    word-break: keep-all;
  }
`;

export default LoginForm;

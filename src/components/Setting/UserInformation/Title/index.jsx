import { useState, useEffect } from 'react';
import EditButton from '../../../EditButton';
import Button from '../../../Button';
import styled from 'styled-components';

const Title = () => {
  const [title, setTitle] = useState('');
  const [isModifyTitle, setIsModifyTitle] = useState(false);

  const onModify = () => {
    isModifyTitle ? setIsModifyTitle(false) : setIsModifyTitle(true);
  };

  useEffect(() => {
    const contents = {
      title: 'my.log',
    };
    setTitle(contents.title);
  }, []);

  const getTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <>
      {isModifyTitle ? (
        <TitleContainer>
          <form>
            <input className='modify-input' type='text' placeholder='벨로그 제목' onChange={getTitle} value={title} />
            <Button type='submit' onClick={onModify} text='저장' className='confirm-button' />
          </form>
        </TitleContainer>
      ) : (
        <>
          <TitleContainer>{title}</TitleContainer>
          <EditButtonContainer>
            <EditButton text='수정' onClick={onModify} />
          </EditButtonContainer>
        </>
      )}
    </>
  );
};

const TitleContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
  line-height: 1.5;

  form {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    .modify-input {
      flex: 1 1 0%;
      display: block;
      padding: 0.5rem;
      margin-right: 1rem;

      border: 1px solid var(--border3);
      border-radius: 4px;
      background: var(--bg-element1);
      color: var(--text2);
      font-size: 1rem;
      line-height: 1rem;
      outline: none;

      :focus {
        border: 1px solid var(--border1);
      }
    }

    .confirm-button {
      background: var(--primary1);
      color: var(--button-text);

      &:hover {
        background: var(--primary2);
      }
    }
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 1rem;
`;

export default Title;

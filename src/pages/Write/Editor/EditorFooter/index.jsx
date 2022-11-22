import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import Button from '../../../../components/Button';
import { useState, useEffect } from 'react';

const EditorFooter = ({ title, content }) => {
  const [onUpload, setOnUpload] = useState(false);
  const [onSave, setOnSave] = useState(false);

  useEffect(() => {
    if (onSave && title && content) {
      console.log('save');
      console.log('title', title);
      console.log('content', content);
    } else {
      setOnSave(false);
    }
  }, [onSave]);

  useEffect(() => {
    if (onUpload && title && content) {
      console.log('uplooad');
      console.log('title', title);
      console.log('content', content);
    } else {
      setOnUpload(false);
    }
  }, [onUpload]);

  return (
    <Positioner>
      <EditorFooterContainer>
        <div className='exit'>
          <BiArrowBack className='arrow-icon' />
          <span>나가기</span>
        </div>
        <div className='export'>
          <Button text='임시저장' className='temporary-storage' onClick={() => setOnSave(true)} />
          <Button text='출간하기' className='upload' onClick={() => setOnUpload(true)} />
        </div>
      </EditorFooterContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  position: fixed;
  left: 0;
  bottom: 0px;
  z-index: 10;
  width: 50%;
`;

const EditorFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: 4rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: var(--editor-footer);

  .exit {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 2.5rem;
    outline: none;
    border: none;
    border-radius: 4px;
    background: none;
    color: var(--text1);
    cursor: pointer;

    &:hover {
      background: var(--slight-layer);
    }

    .arrow-icon {
      margin-right: 0.5rem;
      font-size: 1.25rem;
    }

    span {
      padding-top: 3px;
      font-size: 1.125rem;
    }
  }

  .export {
    button {
      height: 2.5rem;
      font-size: 1.125rem;
      font-weight: 600;
    }

    .temporary-storage {
      background: transparent;
      color: var(--primary1);

      &:hover {
        background: var(--slight-layer);
        color: var(--primary2);
      }
    }

    button + button {
      margin-left: 0.5rem;
    }
  }
`;

export default EditorFooter;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../store/modules/write';
import Tags from './Tags';
import ToolBar from './ToolBar';
import LinkModal from './LinkModal';
import EditorFooter from './EditorFooter';
import styled from 'styled-components';
import WriteZone from './WriteZone';

const Editor = () => {
  const { title, content } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  return (
    <EditorContainer className='editor-container'>
      <textarea className='editor-title' placeholder='제목을 입력하세요' onChange={e => dispatch(setWriteContent({ type: 'title', value: e.target.value }))} />
      <div className='dividing-line' />
      <Tags />
      <ToolBar />
      <WriteZone />
      <EditorFooter title={title} content={content} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .editor-title,
  textarea {
    padding: 0px;
    width: 100%;
    height: 66px;
    line-height: 1.5;
    resize: none;
    outline: none;
    border: none;
    background: transparent;
    color: var(--text1);
    font-size: 2.75rem;
    font-weight: bold;
    cursor: text;
  }

  .dividing-line {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 6px;
    width: 4rem;
    border-radius: 1px;
    background: rgb(73, 80, 87);
  }

  .ql-toolbar.ql-snow {
    display: flex;
    border: none;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 2rem;
    }
    button + button {
      margin-left: 0 0.5rem;
    }
  }
`;

export default Editor;

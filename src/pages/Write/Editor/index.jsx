import ToolBar from './ToolBar';
import EditorFooter from './EditorFooter';
import styled from 'styled-components';
import Tags from './Tags';

const Editor = () => {
  return (
    <EditorContainer className='editor-container'>
      <textarea className='title' placeholder='제목을 입력하세요' />
      <div className='dividing-line' />
      <Tags />
      <ToolBar />
      <pre className='write-zone'>
        <textarea placeholder='당신의 이야기를 적어보세요...' />
      </pre>
      <EditorFooter />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .title,
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

  .write-zone {
    textarea {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text3);
      font-style: italic;
      direction: ltr;
      cursor: text;
      caret-color: #56b6c2 !important;
    }
  }
`;

export default Editor;

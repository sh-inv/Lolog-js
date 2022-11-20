import styled from 'styled-components';
import Editor from './Editor';
import EditorFooter from './EditorFooter';
import Tags from './Tags';

const Write = () => {
  return (
    <WriteContainer>
      <textarea className='title' placeholder='제목을 입력하세요' />
      <div className='dividing-line' />
      <Tags />
      <Editor />
      <EditorFooter />
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  height: 100vh;
  overflow: hidden;

  .title {
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
`;

export default Write;

import styled from 'styled-components';
import ToolBar from './ToolBar';

const Editor = () => {
  return (
    <EditorContainer>
      <ToolBar />
      <div className='write-zone'>
        <pre>당신의 이야기를 적어보세요...</pre>
      </div>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .write-zone {
    pre {
      /* height: 0px; */
      overflow: visible;
      direction: ltr;
      color: var(--text3);
      font-style: italic;
    }
  }
`;

export default Editor;

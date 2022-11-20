import styled from 'styled-components';
import ToolBar from './ToolBar';

const Editor = () => {
  return (
    <EditorContainer>
      <ToolBar />
      <div className='write-zone'>
        <pre>
          <div className='cursor'>&nbsp;</div>
          <span className='none-content'>당신의 이야기를 적어보세요 . . .</span>
        </pre>
      </div>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  width: 100%;

  .write-zone {
    pre {
      position: relative;

      .cursor {
        position: absolute;
        height: 27px;
        left: 48px;
        border-left: 2px solid #56b6c2 !important;
        pointer-events: none;
      }

      .none-content {
        font-style: italic;
      }
      /* height: 0px; */
      overflow: visible;
      direction: ltr;
      color: var(--text3);
      font-style: italic;
      cursor: text;
    }
  }
`;

export default Editor;

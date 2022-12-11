import ToolBarHTagWrapper from './ToolBarHTagWrapper';
import ToolBarBtnWrapper from './ToolBarBtnWrapper';
import styled from 'styled-components';

const ToolBar = ({ imageFileInput }) => {
  const ToolBarHTagList = ['H1', 'H2'];
  const ToolBarBtnLIstMid = ['ql-bold', 'ql-italic', 'ql-strike'];
  const ToolBarBtnListRight = ['ql-blockquote', 'ql-link', 'ql-image', 'ql-code'];

  return (
    <ToolBarContainer className='toolbar-container' id='toolbar'>
      {ToolBarHTagList.map(tag => {
        return <ToolBarHTagWrapper key={tag} type={tag} />;
      })}
      <div className='vertical-line' />
      {ToolBarBtnLIstMid.map(btnType => {
        return <ToolBarBtnWrapper key={btnType} type={btnType} />;
      })}
      <div className='vertical-line' />
      {ToolBarBtnListRight.map(btnType => {
        return <ToolBarBtnWrapper key={btnType} type={btnType} />;
      })}
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 340px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    outline: none;
    border: none;
    background: none;
    font-size: 1rem;
    color: var(--text3);

    &:hover {
      color: var(--text1);
      background: var(--bg-element2);
      cursor: pointer;
    }
  }

  .vertical-line {
    width: 1px;
    height: 1.25rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background: var(--border3);
  }
`;

export default ToolBar;

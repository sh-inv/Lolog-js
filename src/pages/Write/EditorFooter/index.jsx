import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import Button from '../../../components/Button';

const EditorFooter = () => {
  return (
    <Positioner>
      <EditorFooterContainer>
        <div className='exit'>
          <BiArrowBack className='arrow-icon' />
          <span>나가기</span>
        </div>
        <div className='export'>
          <Button text='임시저장' className='temporary-storage' />
          <Button text='출간하기' className='upload' />
        </div>
      </EditorFooterContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  display: fixed;
  bottom: 0px;
  transform: translateY(100%);
  z-index: 10;
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

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '../../../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import styled from 'styled-components';
import { setContent, setIsUploadModal, setTitle, setUploadType, setUploadUrl } from '../../../../store/modules/write';

const EditorFooter = ({ title, content }) => {
  const isReverse = useSelector(state => state.writeContent.isReverse);
  const dispatch = useDispatch();

  const onSave = async () => {
    if (title && content) {
      try {
        const response = await axios.put(`http://localhost:8000/posts?status=3`, {
          title: title,
          content: content,
          thumbnail: '',
          tags: [],
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('제목 또는 내용이 비어있습니다.');
    }
  };

  const onUploadModal = () => {
    dispatch(setTitle(title));
    dispatch(setContent(content));
    dispatch(setUploadType('1'));
    dispatch(setUploadUrl(title));
    dispatch(setIsUploadModal(true));
  };

  return (
    <Positioner className='editor-footer-positioner' isReverse={isReverse}>
      <EditorFooterContainer>
        <div className='exit'>
          <BiArrowBack className='arrow-icon' />
          <span>나가기</span>
        </div>
        <div className='export'>
          <Button text='임시저장' className='temporary-storage' color="transparent" onClick={onSave} />
          <Button text='출간하기' className='upload' color="teal" onClick={onUploadModal} />
        </div>
      </EditorFooterContainer>
    </Positioner>
  );
};

const Positioner = styled.div`
  position: fixed;
  left: ${props => (props.isReverse ? '50%' : '0')};
  bottom: 0px;
  z-index: 10;
  width: 50%;
  min-width: 340px;
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

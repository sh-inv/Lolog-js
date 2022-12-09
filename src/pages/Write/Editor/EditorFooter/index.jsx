import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import Button from '../../../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import Toastify from '../../../../components/Toastify';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const EditorFooter = () => {
  const { title, content, uploadUrl, isReverse } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const onSave = async () => {
    if (title && content) {
      try {
        const config = {
          headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwNTA4MzQxfQ.jMW-mdNJzRGuCMAtyuU5alzvTC9amlDXiA1hpWT8DDc` },
        };
        const bodyData = { title: title, content: 'content', thumbnail: '', tags: [], status: 3, post_url: uploadUrl, description: '' };

        await axios.post(`http://localhost:8000/posts?status=3`, bodyData, config);
        console.log(bodyData);
        toast.success('게시글 임시저장 완료');
      } catch (error) {
        toast.error('게시글 임시저장 실패');
        console.log(error);
      }
    } else {
      toast.error('제목 또는 내용이 비어있습니다.');
    }
  };

  const onUploadModal = () => {
    dispatch(setWriteContent({ type: 'uploadUrl', value: title }));
    dispatch(setWriteContent({ type: 'isUploadModal', value: true }));
  };

  return (
    <Positioner className='editor-footer-positioner' isReverse={isReverse}>
      <EditorFooterContainer>
        <a className='exit' href='/'>
          <BiArrowBack className='arrow-icon' />
          <span>나가기</span>
        </a>
        <div className='export'>
          <Button text='임시저장' className='temporary-storage' color='transparent' onClick={onSave} />
          <Button text='출간하기' className='upload' color='teal' onClick={onUploadModal} />
        </div>
      </EditorFooterContainer>
      <Toastify />
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

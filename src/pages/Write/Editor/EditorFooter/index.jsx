import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { apiClient } from '../../../../api';
import { BiArrowBack } from 'react-icons/bi';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import Button from '../../../../components/Button';
import styled from 'styled-components';

const EditorFooter = () => {
  const [timerOn, setTimerOn] = useState(false);
  const { title, content, thumbnail, tags, seriesId, description, isReverse, isUploadModal } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const autoSaveTerm = 30;
  const initialTime = useRef(autoSaveTerm);
  const interval = useRef(null);
  const [time, setTime] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    interval.current = setInterval(async () => {
      initialTime.current -= 1;
      setTime(initialTime.current);
    }, 1000);
    return () => clearInterval(interval.current);
  }, [timerOn]);

  useEffect(() => {
    if (isUploadModal) {
      clearInterval(interval.current);
    } else {
      initialTime.current = autoSaveTerm;
      setTimerOn(!timerOn);
    }
  }, [isUploadModal]);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
      onSave();
      initialTime.current = autoSaveTerm;
      setTimerOn(!timerOn);
    }
  }, [time]);

  const onSave = async () => {
    if (title && content) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        };
        const bodyData = { title: title, content: content, thumbnail: thumbnail, tags: tags, series_id: seriesId, status: 3, post_url: '', description: description };

        const postInfo = queryString.parse(location.search);
        if (postInfo.status === '3') {
          await apiClient.patch(`posts/${postInfo.id}`, bodyData, config);
        } else {
          const response = await apiClient.post(`/posts?status=3`, bodyData, config);
          navigate(`/write?id=${response.data.post_id}&status=3`);
        }
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
  bottom: 0;
  z-index: 1;
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

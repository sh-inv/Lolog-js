import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { initialize, setWriteContent } from '../../store/modules/write';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import Toastify from '../../components/Toastify';
import ReversePositionBtn from './ReversePositionBtn';
import Editor from './Editor';
import Preview from './Preview';
import UploadModal from './UploadModal';
import styled from 'styled-components';
import { writeMaxWidth1024px, writeMaxWidth1920px, writeMaxWidth768px } from '../../styles/media';

const Write = () => {
  const { isReverse, isUploadModal } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const setInitialValue = async () => {
      const savePost = queryString.parse(location.search);
      if (savePost.id) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            },
          };
          const { post } = await apiClient.get(`/posts/saves/${savePost.id}`, config);
          dispatch(setWriteContent({ type: 'title', value: post.title }));
          dispatch(setWriteContent({ type: 'content', value: post.content }));
          dispatch(setWriteContent({ type: 'thumbnail', value: post.thumbnail }));
          dispatch(setWriteContent({ type: 'seriesId', value: post.seriesId }));
          dispatch(setWriteContent({ type: 'description', value: post.description }));
        } catch (error) {
          toast.error('임시글 불러오기 실패');
          console.log('write saves error =>', error);
        }
      }
    };
    setInitialValue();
  }, [location.search]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

  return (
    <WriteContainer>
      <ReversePositionBtn />
      {isReverse ? (
        <>
          <Preview />
          <Editor />
        </>
      ) : (
        <>
          <Editor />
          <Preview />
        </>
      )}
      {isUploadModal && <UploadModal />}
      <Toastify />
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  display: flex;

  ${writeMaxWidth1920px}
  ${writeMaxWidth1024px}
  ${writeMaxWidth768px}
`;

export default Write;

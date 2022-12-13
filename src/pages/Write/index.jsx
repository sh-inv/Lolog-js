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

  const initialSetting = async (postId, postStatus) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const apiUrl = postStatus === '3' ? '/posts/saves' : '/posts';
      const { data } = await apiClient.get(`${apiUrl}/${postId}`, config);
      dispatch(setWriteContent({ type: 'title', value: data.post.title }));
      dispatch(setWriteContent({ type: 'content', value: data.post.content }));
      dispatch(setWriteContent({ type: 'thumbnail', value: data.post.thumbnail }));

      if (postStatus !== '3') {
        dispatch(setWriteContent({ type: 'seriesId', value: data.series[0].series_id }));
        dispatch(setWriteContent({ type: 'uploadType', value: data.post.status }));
        dispatch(setWriteContent({ type: 'description', value: data.post.description }));
      }
    } catch (error) {
      toast.error('임시글 불러오기 실패');
      console.log('write error =>', error);
    }
  };

  useEffect(() => {
    const setInitialValue = () => {
      const postInfo = queryString.parse(location.search);
      if (postInfo.id) {
        initialSetting(postInfo.id, postInfo.status);
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

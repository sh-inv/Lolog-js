import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { apiClient } from '../../../../api';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import Button from '../../../../components/Button';
import styled from 'styled-components';

const ModalBtns = () => {
  const { title, content, thumbnail, tags, seriesId, uploadType, uploadUrl, description, isSeriesList } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const closeSeriesList = () => {
    dispatch(setWriteContent({ type: 'isSeriesList', value: false }));
  };

  const closeUploadModal = () => {
    dispatch(setWriteContent({ type: 'isUploadModal', value: false }));
  };

  const onUpload = async () => {
    if (title && content) {
      const postInfo = queryString.parse(location.search);

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const bodyData = { title: title, content: content, thumbnail: thumbnail, tags: tags, series_id: seriesId, status: uploadType, post_url: uploadUrl, description: description };
        if (postInfo.id) {
          const response = await apiClient.patch(`/posts/${postInfo.id}`, bodyData, config);
          navigate(`/posts/${response.data.post_id}`);
        } else {
          console.log(bodyData);
          const response = await apiClient.post(`/posts`, bodyData, config);
          navigate(`/posts/${response.data.post_id}`);
        }
      } catch (error) {
        toast.error('게시글 업로드 실패');
        console.log(error);
      }
    } else {
      toast.error('제목 또는 내용이 비어있습니다.');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setWriteContent({ type: 'isUploadModal', value: false }));
    };
  }, []);

  return (
    <ModalBtnsContainer className='modal-btns-container'>
      <Button text='취소' color='transparent' onClick={isSeriesList ? closeSeriesList : closeUploadModal} />
      <Button text={isSeriesList ? '선택하기' : '출간하기'} color='teal' onClick={isSeriesList ? closeSeriesList : onUpload} />
      <Toastify />
    </ModalBtnsContainer>
  );
};

const ModalBtnsContainer = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-top: 0.7rem;

  button + button {
    margin-left: 0.875rem;
  }
`;

export default ModalBtns;

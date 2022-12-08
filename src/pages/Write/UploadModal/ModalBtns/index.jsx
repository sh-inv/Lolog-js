import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSeriesList, setIsUploadModal } from '../../../../store/modules/write';
import Button from '../../../../components/Button';
import Toastify from '../../../../components/Toastify';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const ModalBtns = () => {
  const { title, content, thumbnail, discription, seriesId, uploadType, uploadUrl, isSeriesList } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seriesCancel = () => {
    dispatch(setIsSeriesList(false));
  };

  const uploadCancel = () => {
    dispatch(setIsUploadModal(false));
  };

  const selectSeries = () => {
    dispatch(setIsSeriesList(false));
  };

  const onUpload = async () => {
    if (title && content) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzMzNzUyfQ.X6dn8fdrkbsTxcno9k1r_IZEZNTD_t20vFo_VNMGbjU`,
          },
        };
        const bodyData = { title: title, content: 'content', thumbnail: thumbnail, tags: [], series_id: seriesId, status: uploadType, post_url: uploadUrl, description: discription };
        const response = await axios.post(`http://localhost:8000/posts`, bodyData, config);
        navigate(`/posts/${response.data.post_id}`);
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
      dispatch(setIsUploadModal(false));
    };
  }, []);

  return (
    <ModalBtnsContainer className='modal-btns-container'>
      <Button text='취소' color='transparent' onClick={isSeriesList ? seriesCancel : uploadCancel} />
      <Button text={isSeriesList ? '선택하기' : '출간하기'} color='teal' onClick={isSeriesList ? selectSeries : onUpload} />
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailData } from '../../store/modules/detailPage';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import PostArea from './PostArea';
import NextPrePost from './NextPrePost';
import CommentArea from './CommentArea';
import Toastify from '../../components/Toastify';
import styled from 'styled-components';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData, commentsData } = useSelector(state => state.detailData);
  localStorage.setItem('authToken', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzkyODcyfQ._vtBm0mTxBG4sWbU8pHjnxlDuWigMmuPCLK5tw5mDW8');

  useEffect(() => {
    (async () => {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem('authToken'),
          },
        };
        const { data } = await apiClient.get(`${location.pathname}`, config);
        dispatch(setDetailData(data));
      } catch (error) {
        toast.error('게시글을 불러오지 못했습니다.');
        console.log('detail data error => ', error);
      }
    })();
  }, []);

  return (
    <>
      <Toastify />
      {postData && (
        <DetailPageContainer>
          <PostArea postData={postData} />
          <NextPrePost postData={postData} />
          <CommentArea postData={postData} />
        </DetailPageContainer>
      )}
    </>
  );
};

const DetailPageContainer = styled.div`
  width: 768px;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

export default DetailPage;

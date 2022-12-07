import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import CommentArea from './CommentArea';
import { apiClient } from '../../api';
import NextPrePost from './NextPrePost';
import { getDetailData } from '../../store/modules/detailPage';
import Toastify from '../../components/Toastify';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData, commentsData } = useSelector(state => state.detailData);
  localStorage.setItem('authToken', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzgwNDQ4fQ.gnZa0IFLsT4_d8N4neijUehkq19aOVg3TdI5ZcUb8bA');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/posts${location.pathname}`, { headers: { Authorization: localStorage.getItem('authToken') } });
        dispatch(getDetailData(data));
      } catch (error) {
        toast.error('게시글을 불러오지 못했습니다.');
        console.log('detail data error => ', error);
      }
    })();
    // (async () => {
    //   try {
    //     const { data } = await axios.get('/public/data/detailpage/comments.json');
    //     dispatch(getDetailData(data));
    //   } catch (error) {
    //     (() => toast.error('댓글 통신 에러'))();
    //     console.log('comment list error => ', error);
    //   }
    // })();
  }, []);

  console.log('postData', postData);

  return (
    <>
      <Toastify />
      {postData && (
        <DetailPageContainer>
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

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

export default DetailPage;

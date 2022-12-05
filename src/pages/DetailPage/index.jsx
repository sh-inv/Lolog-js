import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { postData, commentsData } = useSelector(state => state.detailData);
  localStorage.setItem('authToken', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiJFZGVuIn0sImlhdCI6MTY2OTg4MTc2OH0.jPT90PxE_dJaV3OAjioIpVRXdgyaELBvNsRMieZ6q0c');

  useEffect(() => {
    const headers = localStorage.getItem('token');
    (async () => {
      try {
        const { data } = await apiClient.get('/posts/1', { headers: headers });
        dispatch(getDetailData(data));
      } catch (error) {
        (() => toast.error('댓글 통신 에러'))();
        console.log('detail data error => ', error);
      }
    })();
    // (async () => {
    //   try {
    //     const { data } = await axios.get('/public/data/detailpage/comments.json');
    //     dispatch(getDetailData(data));
    //   } catch (error) {
    //     console.log('comment list error => ', error);
    //   }
    // })();
  }, []);

  console.log(localStorage.getItem('authToken'));

  return (
    <>
      <Toastify />
      postData && (
      <DetailPageContainer>
        <NextPrePost postData={postData} />
        <CommentArea postData={postData} />
      </DetailPageContainer>
      )
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

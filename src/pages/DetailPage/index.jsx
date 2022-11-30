import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentArea from './CommentArea';
import { apiClient } from '../../api';
import NextPrePost from './NextPrePost';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailData } from '../../store/modules/detailPage';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { postData, commentsData } = useSelector(state => state.detailData);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get('/lolog/1/8');
        dispatch(getDetailData(data));
      } catch (error) {
        console.log('detail page data error => ', error);
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

  return (
    postData && (
      <DetailPageContainer>
        <NextPrePost postData={postData} />
        <CommentArea comments={commentsData} />
      </DetailPageContainer>
    )
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

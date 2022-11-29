import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentArea from './CommentArea';
import { apiClient } from '../../api';
import NextPrePost from './NextPrePost';
import PostArea from './PostArea';

const DetailPage = () => {
  const [postData, setPostData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await apiClient.get('/inside/1/8');
  //       setPostData(data);
  //     } catch (error) {
  //       console.log('comment list error => ', error);
  //     }
  //   })();
  //   // (async () => {
  //   //   try {
  //   //     const { data } = await axios.get('/public/data/detailpage/comments.json');
  //   //     setComments(data.comments);
  //   //   } catch (error) {
  //   //     console.log('comment list error => ', error);
  //   //   }
  //   // })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/data/detailPage/detailPage.json');
        setPostData(data);
      } catch (error) {
        console.log('comment list error => ', error);
      }
    })();
  }, []);

  return (
    postData && (
      <DetailPageContainer>
        <PostArea postData={postData} />
        {/* <NextPrePost postData={postData} /> */}
        <CommentArea comments={postData.comments} />
      </DetailPageContainer>
    )
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

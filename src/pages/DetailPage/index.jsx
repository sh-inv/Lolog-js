import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentArea from './CommentArea';
import { apiClient } from '../../api';
import NextPrePost from './NextPrePost';

const DetailPage = () => {
  const [postData, setPostData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiClient.get('/inside/1/19');
        setPostData(data);
      } catch (error) {
        console.log('comment list error => ', error);
      }
    })();
    // (async () => {
    //   try {
    //     const { data } = await axios.get('/public/data/detailpage/comments.json');
    //     setComments(data.comments);
    //   } catch (error) {
    //     console.log('comment list error => ', error);
    //   }
    // })();
  }, []);

  return (
    postData && (
      <DetailPageContainer>
        <NextPrePost postData={postData} />
        <CommentArea comments={postData.comments} />
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiClient } from '../../api';
import { setDetailData } from '../../store/modules/detailPage';
import { toast } from 'react-toastify';
import PostArea from './PostArea';
import CommentArea from './CommentArea';
import NextPrePost from './NextPrePost';
import Toastify from '../../components/Toastify';
import styled from 'styled-components';
import axios from 'axios';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { postData, commentsData } = useSelector(state => state.detailData);
  // localStorage.setItem('authToken', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMDcyODUyfQ.JMBl7I1IfMJQ6_dChKsl0FDHmyJ8UOALMYPgd15p2rA');

  useEffect(() => {
    (async () => {
      try {
        const config = {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzMzNzUyfQ.X6dn8fdrkbsTxcno9k1r_IZEZNTD_t20vFo_VNMGbjU',
          },
        };
        const { data } = await axios.get('http://localhost:8000/posts/1', config);
        dispatch(setDetailData(data));
      } catch (error) {
        (() => toast.error('댓글 통신 에러'))();
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
          {/* <NextPrePost postData={postData} /> */}
          {/* <CommentArea postData={postData} /> */}
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

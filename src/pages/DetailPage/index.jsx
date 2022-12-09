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
import InterestingPost from './InterestingPost';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData } = useSelector(state => state.detailData);

  const getPostData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.get(`${location.pathname}`, config);
      dispatch(setDetailData(data));
      console.log(data.comments);
    } catch (error) {
      toast.error('게시글을 불러오지 못했습니다.');
      console.log('detail data error => ', error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <Toastify />
      {postData && (
        <>
          <DetailPageContainer>
            <PostArea postData={postData} />
            <NextPrePost postData={postData} />
            <CommentArea postData={postData} getPostData={getPostData} />
          </DetailPageContainer>
          <InterestingPost interestingPostData={postData.interested} />
        </>
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

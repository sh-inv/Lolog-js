import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailCommentsData, setDetailPostData } from '../../store/modules/detailpage';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import PostArea from './PostArea';
import NextPrePost from './NextPrePost';
import CommentArea from './CommentArea';
import InterestingPost from './InterestingPost';
import Toastify from '../../components/Toastify';
import styled from 'styled-components';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData } = useSelector(state => state.detailData);

  const getPostData = async () => {
    const isLogin = () => {
      if (localStorage.getItem('authToken')) {
        return `Bearer ${localStorage.getItem('authToken')}`;
      }
    };

    try {
      const config = {
        headers: {
          Authorization: isLogin(),
        },
      };
      const { data } = await apiClient.get(`${location.pathname}`, config);
      dispatch(setDetailPostData(data));
      dispatch(setDetailCommentsData(data.comments));
    } catch (error) {
      toast.error('게시글을 불러오지 못했습니다.');
    }
  };

  useEffect(() => {
    getPostData();
  }, [location.pathname]);

  return (
    <>
      <Toastify />
      {postData && (
        <>
          <DetailPageContainer>
            <PostArea />
            <NextPrePost postData={postData} />
            <CommentArea postData={postData} />
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

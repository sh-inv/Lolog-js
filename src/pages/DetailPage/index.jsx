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
import { detailPageMaxWidth1920px, detailPageMaxWidth1024px, detailPageMaxWidth768px } from '../../styles/media';

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
      console.log('detail page error =>', error);
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
  ${detailPageMaxWidth1920px}
  ${detailPageMaxWidth1024px}
  ${detailPageMaxWidth768px}
`;

export default DetailPage;

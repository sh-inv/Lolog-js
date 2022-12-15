import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../api';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const LikeBtn = ({ activeClassName, direction }) => {
  const { postData } = useSelector(state => state.detailData);

  const [likeCount, setLikeCount] = useState(0);
  const [isUserLike, setIsUserLike] = useState(false);

  useEffect(() => {
    setLikeCount(postData.post.likes);
    setIsUserLike(postData.post.is_liked);
  }, [postData]);

  const like = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.post(`/posts/${postData.post.post_id}/like`, '', config);
      setLikeCount(prev => prev + 1);
      setIsUserLike(true);
    } catch (error) {
      console.log('like error => ', error);
    }
  };

  const unLike = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.delete(`/posts/${postData.post.post_id}/like`, config);
      setLikeCount(prev => prev - 1);
      setIsUserLike(false);
    } catch (error) {
      console.log('unlike error => ', error);
    }
  };

  const changeLike = e => {
    const isLike = e.target.className.includes('active');
    isLike ? unLike() : like();
  };

  return (
    <LikeBtnContainer className='like-btn-container' direction={direction}>
      <div className={isUserLike ? `like-icon-container ${activeClassName}` : 'like-icon-container'} onClick={changeLike}>
        <FaHeart />
        {direction === 'row' && <div className='like-count'>{likeCount}</div>}
      </div>
      {direction === 'column' && <div className='like-count'>{likeCount}</div>}
    </LikeBtnContainer>
  );
};

const LikeBtnContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  -webkit-box-align: center;
  align-items: center;
`;

export default LikeBtn;

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../../../../../api';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Like = () => {
  const { postData } = useSelector(state => state.detailData);
  const [likeCount, setLikeCount] = useState(0);
  const [isUserLike, setIsUserLike] = useState(false);

  useEffect(() => {
    setLikeCount(postData.post.likes);
    setIsUserLike(Number(postData.post.is_liked));
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
    <LikeContainer>
      <div className={isUserLike ? 'icon-circle-wrapper active' : 'icon-circle-wrapper'} onClick={changeLike}>
        <FaHeart />
      </div>
      <div className='like-count'>{likeCount}</div>
    </LikeContainer>
  );
};

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  @keyframes spring {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }

  .icon-circle-wrapper {
    background: var(--bg-element1);
    color: var(--text3);

    &:hover {
      border-color: var(--text1);
      color: var(--text1);
    }
  }

  .active {
    animation: spring 0.25s 2;
    border-color: var(--primary2);
    background: var(--primary2);
    color: var(--button-text);

    &:hover {
      border-color: rgb(56, 217, 169);
      background: rgb(56, 217, 169);
      color: var(--button-text);
    }
  }

  .like-count {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text2);
    line-height: 1;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export default Like;

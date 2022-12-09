import { apiClient } from '../../../../../../api';
import { useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Like = () => {
  const { postData } = useSelector(state => state.detailData);
  const postId = postData.post.post_id;
  const likes = postData.post.likes;

  const like = async e => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.post(`/lolog/${postId}/like`, config);
      e.target.className = 'icon-circle-wrapper active';
    } catch (error) {
      console.log('detail data error => ', error);
    }
  };

  const unLike = async e => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      const { data } = await apiClient.delete(`/lolog/${postId}/like`, config);
      e.target.className = 'icon-circle-wrapper';
    } catch (error) {
      console.log('detail data error => ', error);
    }
  };

  const changeLike = e => {
    const isLike = e.target.className.includes('active');
    isLike ? unLike() : like();
  };

  return (
    <LikeContainer>
      <div className='icon-circle-wrapper' onClick={changeLike}>
        <FaHeart />
      </div>
      <div className='like-count'>{likes}</div>
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

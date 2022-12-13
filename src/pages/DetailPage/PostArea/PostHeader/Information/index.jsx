import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../../../../api';
import { FaHeart } from 'react-icons/fa';
import GetPostDate from '../../../../../components/GetPostDate';
import styled from 'styled-components';

const Information = ({ postData }) => {
  console.log(postData);
  const postDate = new Date(postData.create_at);

  const [likeCount, setLikeCount] = useState(0);
  const [isUserLike, setIsUserLike] = useState(false);

  useEffect(() => {
    setLikeCount(postData.likes);
    setIsUserLike(postData.is_liked);
  }, [postData]);

  const like = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.post(`/posts/${postData.post_id}/like`, '', config);
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
      await apiClient.delete(`/posts/${postData.post_id}/like`, config);
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
    <InformationContainer className='information-container'>
      <div className='information'>
        <span className='user-name'>{postData.login_id}</span>
        <span className='separator'>&#183;</span>
        <GetPostDate postDate={postDate} />
      </div>
      <div className={isUserLike ? 'like active' : 'like'} onClick={changeLike}>
        <FaHeart />
        <span>{likeCount}</span>
      </div>
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  .information {
    color: var(--text2);
    font-size: 1rem;

    .user-name {
      color: var(--text1);
      font-weight: bold;
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .like {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    align-items: center;
    -webkit-box-align: center;
    padding: 0 0.75rem;
    height: 1.5rem;
    border: 1px solid var(--border2);
    border-radius: 0.75rem;
    background: var(--bg-element1);
    cursor: pointer;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.75rem;
      color: var(--text3);
      pointer-events: none;
    }
    span {
      font-size: 0.75rem;
      font-weight: bold;
      color: var(--text3);
      pointer-events: none;
    }
  }

  .active {
    border-color: var(--primary2);
    background: var(--primary2);
    svg {
      color: white;
    }
    span {
      color: white;
    }
  }
`;

export default Information;

import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../api';

const usePostAxios = (query, pageNum, name) => {
  const [postData, setPostData] = useState([]);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const location = useLocation();

  const getPostData = useCallback(async () => {
    try {
      const isLogin = () => {
        if (location.pathname === '/follow' && localStorage.getItem('authToken')) {
          return `Bearer ${localStorage.getItem('authToken')}`;
        }
        return;
      };

      const config = {
        headers: {
          Authorization: isLogin(),
        },
      };

      const { data } = await apiClient.get(`/main?type=${name}&period=${query}&offset=${pageNum}&limit=30`, config);
      if (data.post.length) {
        if (pageNum === 1) {
          setPostData([]);
          setPostData(data.post);
        } else {
          setPostData(prev => [...prev, ...data.post]);
        }
        setNoMorePosts(true);
      } else {
        if (postData.length && pageNum === 1) {
          setPostData([]);
        }
        setNoMorePosts(false);
      }
    } catch (error) {
      console.log('메인페이지 게시글 통신 오류 => ', error);
    }
  }, [query, pageNum, name]);

  useEffect(() => {
    getPostData();
  }, [query, pageNum, name]);

  return { postData, noMorePosts };
};

export default usePostAxios;

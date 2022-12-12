import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../api';

const useAxios = (period, pageNum, name) => {
  const [postData, setPostData] = useState([]);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const sendQuery = useCallback(async () => {
    try {
      const { data } = await apiClient.get(`/main?type=${name}&period=${period}&offset=${pageNum}&limit=30`);
      if (data.post.length) {
        setNoMorePosts(true);
        setPostData(prev => [...prev, ...data.post]);
      } else {
        setNoMorePosts(false);
      }
    } catch (error) {
      console.log('메인페이지 게시글 통신 오류 => ', error);
    }
  }, [period, pageNum, name]);

  useEffect(() => {
    sendQuery(period);
  }, [period, sendQuery, pageNum, name]);

  return { postData, noMorePosts };
};

export default useAxios;

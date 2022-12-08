import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PostList from '../../components/PostList';

const Main = () => {
  const location = useLocation();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setPageInfo({
        name: 'trend',
        query: 'week',
      });
    } else if (path === '/recent') {
      setPageInfo({
        name: 'recent',
        query: '',
      });
    } else {
      setPageInfo({
        name: 'follow',
        query: '',
      });
    }
  }, [location]);

  return pageInfo && <PostList pageInfo={pageInfo} />;
};

export default Main;

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
      setPageInfo('trend');
    } else if (path === '/recent') {
      setPageInfo('recent');
    } else {
      setPageInfo('follow');
    }
  }, [location]);

  return pageInfo && <PostList pageInfo={pageInfo} />;
};

export default Main;

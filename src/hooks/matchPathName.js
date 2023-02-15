import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../api';

const matchPathName = () => {
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState('');
  const [activeHeaderTitle, setActiveHeaderTitle] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getData = async () => {
      const postsRegex = /^\/posts\/[0-9]/g;
      const lologRegex = /^\/[0-9]/g;
      const path = location.pathname;

      if (postsRegex.test(path)) {
        const { data } = await apiClient.get(location.pathname);
        await setHeaderTitle(data.post.lolog_title);
        await setUserId(data.post.user_id);
        await setActiveHeaderTitle(true);
      } else if (lologRegex.test(path)) {
        const userIdPath = path.match(lologRegex);
        const { data } = await apiClient.get(`/lolog${userIdPath[0]}?offset=1&limit=1&tag_id=0`);
        await setHeaderTitle(data.user.title);
        await setUserId(data.user.id);
        await setActiveHeaderTitle(true);
      } else {
        await setActiveHeaderTitle(false);
      }
    };

    getData();
  }, [location.pathname]);

  return { headerTitle, activeHeaderTitle, userId };
};

export default matchPathName;

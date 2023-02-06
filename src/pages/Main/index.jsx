import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PostList from '../../components/PostList';
import { setName, setQuery } from '../../store/modules/mainnavbar';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.mainNavBar);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      dispatch(setName('trend'));
      dispatch(setQuery('week'));
    } else if (path === '/recent') {
      dispatch(setName('recent'));
      dispatch(setQuery(''));
    } else if (path === '/follow') {
      dispatch(setName('follow'));
      dispatch(setQuery(''));
    }
    return;
  }, [location]);

  return name && <PostList />;
};

export default Main;

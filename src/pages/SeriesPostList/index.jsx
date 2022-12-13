import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { apiClient } from '../../api';
import Title from './Title';
import Edit from './Edit';
import Sort from './Sort';
import EditPostList from './EditPostList';
import PostList from './PostList';
import { setSeriesPostList } from '../../store/modules/seriespostlist';

const SeriesPostList = () => {
  const [postList, setPostList] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const [isSort, setIsSort] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const location = useLocation();
  const userId = location.pathname.split('/')[1];
  const seriesId = location.pathname.split('/')[3];

  const { seriesPostList } = useSelector(state => state.seriesPostList);
  const dispatch = useDispatch();

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get(`/series/posts/${seriesId}?sort=${isSort ? 'desc' : 'asc'}`, config);
        console.log(data);
        dispatch(setSeriesPostList(data.series));
        setPostList(data.series);
        setSeriesName(data.series[0].series_name);
      } catch (error) {
        console.log(error);
      }
    };
    if (isModify === false) {
      loader();
    }
  }, [isSort, isModify]);

  const isOwner = seriesPostList[0]?.is_owner;

  const onClickHandler = () => {
    setIsSort(!isSort);
  };

  return (
    seriesPostList && (
      <SeriesPostListContainer>
        <label>시리즈</label>
        <Title isModify={isModify} seriesName={seriesName} setSeriesName={setSeriesName} />
        <div className='border' />
        {isOwner === 1 && <Edit isModify={isModify} setIsModify={setIsModify} seriesName={seriesName} userId={userId} />}
        {isModify ? (
          <EditPostList isModify={isModify} setIsModify={setIsModify} postList={postList} setPostList={setPostList} />
        ) : (
          <>
            <Sort isSort={isSort} setIsSort={setIsSort} onSort={onClickHandler} />
            <PostList />
          </>
        )}
      </SeriesPostListContainer>
    )
  );
};

const SeriesPostListContainer = styled.div`
  width: 768px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  label {
    display: inline-flex;
    border-bottom: 4px solid var(--primary2);
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--primary2);
    line-height: 1.5;
  }

  .border {
    width: 100%;
    height: 1px;
    margin-bottom: 1.5rem;
    background: var(--bg-element4);
  }
`;

export default SeriesPostList;

import { useState, useEffect } from 'react';
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
  const [isModify, setIsModify] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [postList, setPostList] = useState([]);
  const { seriesPostList } = useSelector(state => state.seriesPostList);
  // const isOwner = seriesPostList[0].is_owner;
  // const seriesId = seriesPostList[0]?.series_id;
  const dispatch = useDispatch();

  console.log(seriesPostList);
  // console.log(seriesId);

  useEffect(() => {
    const loader = async () => {
      try {
        const { data } = await apiClient.get(`/series/posts/9?sort=${isSort ? 'desc' : 'asc'}`);
        console.log(data);
        dispatch(setSeriesPostList(data.series));
        setPostList(data.series);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, [isSort]);

  const onClickHandler = () => {
    setIsSort(!isSort);
  };

  // const modifyConfirm = async () => {
  //   try {
  //     const { data } = await apiClient.patch(`/series/${seriesId}`);
  //     // dispatch(setSeriesPostList())
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    seriesPostList && (
      <SeriesPostListContainer>
        <label>시리즈</label>
        <Title isModify={isModify} />
        <div className='border' />
        {seriesPostList[0]?.is_owner === 0 && <Edit isModify={isModify} setIsModify={setIsModify} />}
        {isModify ? (
          <EditPostList isModify={isModify} setIsModify={setIsModify} postList={postList} setPostList={setPostList} />
        ) : (
          <>
            <Sort isSort={isSort} setIsSort={setIsSort} onSort={onClickHandler} /> <PostList />
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

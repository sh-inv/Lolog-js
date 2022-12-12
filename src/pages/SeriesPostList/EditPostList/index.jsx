import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import styled from 'styled-components';
import EditPost from './EditPost';
import { setSeriesPostList } from '../../../store/modules/seriespostlist';

const EditPostList = ({ postList, setPostList }) => {
  const dispatch = useDispatch();

  const movePost = useCallback((dragIndex, hoverIndex) => {
    setPostList(prevCards =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
    // let updatePost = update(seriesPostList, {
    //   $splice: [
    //     [dragIndex, 1],
    //     [hoverIndex, 0, seriesPostList[dragIndex]],
    //   ],
    // });
    // dispatch(setSeriesPostList(updatePost));
  }, []);

  useEffect(() => {
    dispatch(setSeriesPostList(postList));
  }, [postList]);

  const renderPost = useCallback((post, index) => {
    return <EditPost key={post.sort} index={index} id={post.sort} title={post.title} src={post.thumbnail} contents={post.content} date={post.create_at} movePost={movePost} />;
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <EditPostListContainer>{postList.map((post, i) => renderPost(post, i))}</EditPostListContainer>
    </DndProvider>
  );
};

const EditPostListContainer = styled.div`
  margin-top: 3rem;
  padding: 1.5rem 1.5rem 0.5rem;
  background: rgb(248, 249, 250);
  border-radius: 4px;
`;

export default EditPostList;

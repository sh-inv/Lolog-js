import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Button from '../../../components/Button';
import EditPost from './EditPost';
// import { setSeriesPostList } from '../../../store/modules/seriespostlist';

const EditPostList = ({ isModify, setIsModify, postList, setPostList }) => {
  // const dispatch = useDispatch();
  const { seriesPostList } = useSelector(state => state.seriesPostList);
  const seriesId = seriesPostList[0].series_id;

  // const modifyConfirm = async () => {
  //   const body = [
  //     {
  //       post_id: '',
  //       sort: index,
  //     },
  //   ];
  //   try {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  //       },
  //     };
  //     const { data } = await apiClient.patch(`/series/${seriesId}`, body, config);
  //     // dispatch(setSeriesPostList())
  //     // setPostList();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  const renderPost = useCallback((post, index) => {
    return <EditPost key={post.sort} index={index} id={post.sort} title={post.title} src={post.thumbnail} contents={post.content} date={post.create_at} movePost={movePost} />;
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Button text='적용' color='teal' onClick={modifyConfirm} /> */}
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

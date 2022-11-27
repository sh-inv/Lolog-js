import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/inside/1/8');
        setComments(data.comments);
      } catch (error) {
        console.log('comment list error => ', error);
      }
    })();
    // (async () => {
    //   try {
    //     const { data } = await axios.get('/public/data/detailpage/comments.json');
    //     setComments(data.comments);
    //   } catch (error) {
    //     console.log('comment list error => ', error);
    //   }
    // })();
  }, []);

  return (
    <CommentListContainer>
      {comments.map(commentData => (
        <Comment key={commentData.comment_id} commentData={commentData} />
      ))}
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  margin-top: 2.5rem;
`;

export default CommentList;

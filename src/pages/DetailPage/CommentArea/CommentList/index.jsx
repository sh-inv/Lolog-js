import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/public/data/detailpage/comments.json');
        setComments(data.commentdata);
      } catch (error) {
        console.log('comment list error => ', error);
      }
    })();
  }, []);

  return (
    <CommentListContainer>
      {comments.map(comment => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  margin-top: 2.5rem;
`;

export default CommentList;

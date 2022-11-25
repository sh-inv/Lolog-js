import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

const CommentList = () => {
  const { VITE_BASE_URL } = import.meta.env;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/inside/21/1');
        setComments(data.post);
      } catch (error) {
        console.log('comment list error => ', error);
      }
    })();
  }, []);

  console.log(comments);

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

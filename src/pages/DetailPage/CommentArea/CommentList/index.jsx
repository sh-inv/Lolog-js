import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

const CommentList = ({ comments }) => {
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

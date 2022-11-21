import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CommentList = () => {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('public/data/detailpage/comments.json');
        setCommentData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(commentData);

  return (
    <CommentListContainer>
      <div>asdfasdfasdf</div>
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  margin-top: 2.5rem;

  div {
    height: 100px;
    border: 1px solid red;
  }
`;

export default CommentList;

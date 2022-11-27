import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Textarea from '../../../components/Comment/Textarea';
import CommentList from './CommentList';

const CommentArea = () => {
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
  console.log(comments);

  return (
    <CommentAreaContainer>
      <h4 className='comments-count'>{comments.length}개의 댓글</h4>
      <Textarea />
      <CommentList comments={comments} />
    </CommentAreaContainer>
  );
};

const CommentAreaContainer = styled.div`
  margin-top: 3rem;
  color: var(--text1);

  .comments-count {
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export default CommentArea;

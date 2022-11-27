import styled from 'styled-components';
import CommentList from './CommentList';

const CommentArea = () => {
  return (
    <CommentAreaContainer>
      <CommentList />
    </CommentAreaContainer>
  );
};

const CommentAreaContainer = styled.div``;

export default CommentArea;

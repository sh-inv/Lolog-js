import styled from 'styled-components';
import PostViewer from '../../../../components/PostViewer';

const Content = ({ postContent }) => {
  return (
    <ContentContainer>
      <PostViewer content={postContent} />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin: 5rem auto 0px;
  width: 768px;
`;

export default Content;

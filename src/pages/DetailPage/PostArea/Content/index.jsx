import styled from 'styled-components';
import PostViewer from '../../../../components/PostViewer';

const Content = ({ postContent }) => {
  return (
    <ContentContainer className='content-container'>
      <PostViewer content={postContent} />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin: 5rem auto 0px;
`;

export default Content;

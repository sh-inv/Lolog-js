import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PostViewer from '../../../../components/PostViewer';

const Content = () => {
  const { postData } = useSelector(state => state.detailData);

  return (
    <ContentContainer className='content-container'>
      <PostViewer content={postData.post.content} />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin: 5rem auto 0px;
`;

export default Content;

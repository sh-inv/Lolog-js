import styled from 'styled-components';
import Post from './Post';

const MyLolog = () => {
  return (
    <MyLologContainer>
      <Post />
    </MyLologContainer>
  );
};

const MyLologContainer = styled.div`
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export default MyLolog;

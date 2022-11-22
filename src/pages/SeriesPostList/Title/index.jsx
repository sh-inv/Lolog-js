import styled from 'styled-components';

const Title = () => {
  return <TitleContainer>Title</TitleContainer>;
};

const TitleContainer = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text1);
  letter-spacing: -0.004em;
  line-height: 1.5;
  font-size: 2.5rem;
  outline: none;
  overflow: hidden;
`;

export default Title;

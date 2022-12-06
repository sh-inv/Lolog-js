import styled from 'styled-components';

const NoSaves = () => {
  return <NoSavesContainer>임시 저장한 글이 없습니다.</NoSavesContainer>;
};

const NoSavesContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  font-size: 1.5rem;
  color: var(--text3);
`;

export default NoSaves;

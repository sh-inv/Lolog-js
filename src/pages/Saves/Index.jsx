import SavesList from './SavesList';
import styled from 'styled-components';

const Saves = () => {
  return (
    <SavesContainer>
      <h1 className='title'>임시 글 목록</h1>
      <SavesList />
    </SavesContainer>
  );
};

const SavesContainer = styled.div`
  width: 768px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }

  .title {
    margin-top: 0px;
    margin-bottom: 3rem;
    line-height: 1.5;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
    }
  }
`;

export default Saves;

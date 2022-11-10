import SavesList from '../../components/SavesList';
import styled from 'styled-components';

const Saves = () => {
  return (
    <SavesContainer>
      <h3 className='title'>임시 글 목록</h3>
      <SavesList />
    </SavesContainer>
  );
};

const SavesContainer = styled.div`
  width: 768px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

  .title {
    margin-top: 0px;
    margin-bottom: 3rem;
    line-height: 1.5;
    font-size: 3rem;
  }
`;

export default Saves;

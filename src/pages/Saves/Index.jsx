import SavesList from '../../components/Saves/SavesList/Index';
import styled from 'styled-components';

const Saves = () => {
  return (
    <Temporary>
      <Title>임시 글 목록</Title>
      <SavesList />
    </Temporary>
  );
};

const Temporary = styled.div`
  width: 768px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 3rem;
  line-height: 1.5;
  font-size: 3rem;
`;

export default Saves;

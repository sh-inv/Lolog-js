import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';
import { searchMaxWidth768px } from '../../styles/media';

const Search = () => {
  return (
    <Positioner>
      <SearchBox width='768px' />
    </Positioner>
  );
};

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  ${searchMaxWidth768px}
`;

export default Search;

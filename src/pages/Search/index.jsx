import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';
import { searchMaxWidth768px } from '../../styles/media';

const Search = () => {
  // fork test 1
  // fork test 2

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

  .search-box-container {
    padding: 1rem 1.5rem;
    width: 768px;
    .search-box-icon {
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .search-box-input {
      line-height: 2rem;
      font-size: 1.5rem;
    }
  }

  ${searchMaxWidth768px}
`;

export default Search;

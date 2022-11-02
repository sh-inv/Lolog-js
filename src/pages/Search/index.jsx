import styled from 'styled-components';
import { darkModeFontColor } from '../../styles/color';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <Positioner>
      <InputWrapper>
        <BiSearch />
        <SearchInput type='text' placeholder='검색어를 입력하세요' />
      </InputWrapper>
    </Positioner>
  );
};

export default Search;

const Positioner = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 768px;
  border: 1px solid #a0a0a0;
  transition: all 0.125s ease-in 0s;

  :focus-within {
    border-color: #ececec;
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 1.5rem;
  border: none;
  color: ${darkModeFontColor};
  background-color: transparent;
  cursor: text;
`;

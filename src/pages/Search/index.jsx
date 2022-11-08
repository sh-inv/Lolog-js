import styled from 'styled-components';
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

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media only screen and (max-width: 767px) {
    top: 20%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 768px;
  border: 1px solid #a0a0a0;
  transition: all 0.125s ease-in 0s;

  :focus-within {
    border-color: var(--text);
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 767px) {
    padding: 0.125rem 1.5rem;
    width: 90%;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.5rem;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 1.5rem;
  border: none;
  color: var(--text);
  background-color: transparent;
  cursor: text;

  @media only screen and (max-width: 767px) {
    font-size: 1.125rem;
  }
`;

export default Search;

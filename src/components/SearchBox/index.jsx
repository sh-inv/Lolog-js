import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBox = () => {
  return (
    <SearchBoxContainer className='search-box-container'>
      <BiSearch className='search-box-icon' />
      <input className='search-box-input' type='text' placeholder='검색어를 입력하세요' />
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #a0a0a0;
  transition: all 0.125s ease-in 0s;

  :focus-within {
    border-color: var(--text1);
  }

  .search-box-input {
    width: 100%;
    border: none;
    color: var(--text1);
    background-color: transparent;
    cursor: text;
  }
`;

export default SearchBox;

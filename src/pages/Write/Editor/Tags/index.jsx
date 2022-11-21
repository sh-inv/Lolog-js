import styled from 'styled-components';

const Tags = () => {
  return (
    <TagsContainer>
      <div className='tags'></div>
      <input className='tag-input' type='text' placeholder='태그를 입력하세요' />
      <div className='tag-input-guide-box'></div>
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  .tag-input {
    display: inline-flex;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    line-height: 2rem;
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.125rem;
    color: var(--text1);
    cursor: text;
  }

  .tag-input-guide-box {
    display: block;
    width: 100%;
    color: var(--text2);
    transition: all 0.125s ease-in 0s;
  }
`;

export default Tags;

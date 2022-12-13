import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Tags = () => {
  const { tags } = useSelector(state => state.writeContent);
  const [isGuide, setIsGuide] = useState(false);
  console.log('tags', tags);

  const popupGuide = () => {
    setIsGuide(true);
    setTimeout(() => {
      setIsGuide(false);
    }, 3000);
  };

  return (
    <TagsContainer isGuide={isGuide}>
      <div className='tags'></div>
      <input className='tag-input' type='text' placeholder='태그를 입력하세요' onClick={popupGuide} />
      <div className={isGuide ? 'tag-input-guide-box guide-active' : 'tag-input-guide-box guide-close'}>
        <p>쉼표 혹는 엔터를 입력하여 태그를 등록할 수 있습니다.</p>
        <p>등록된 태그를 클릭하면 사라집니다.</p>
      </div>
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  position: relative;

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

  @keyframes slidein {
    from {
      top: 1.5rem;
      opacity: 0;
    }

    to {
      top: 2.9rem;
      opacity: 1;
    }
  }

  @keyframes slideout {
    from {
      top: 2.9rem;
      opacity: 1;
    }

    to {
      top: 1.5rem;
      opacity: 0;
    }
  }

  .tag-input-guide-box {
    position: absolute;
    z-index: 1;
    padding: 0.5rem 0.8rem;
    width: fit-content;
    background-color: var(--border1);
    color: var(--text-invert);
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    transition: all 0.125s ease-in;
  }

  .guide-active {
    animation: slidein 0.25s;
  }

  .guide-close {
    opacity: 0;
    animation: slideout 0.25s;
  }
`;

export default Tags;

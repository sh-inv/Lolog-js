import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import styled from 'styled-components';

const Tags = () => {
  const [inputValue, setInputValue] = useState('');
  const [isGuide, setIsGuide] = useState(false);
  const { tags } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const popupGuide = () => {
    setIsGuide(true);
    setTimeout(() => {
      setIsGuide(false);
    }, 3000);
  };

  const pushTag = e => {
    if (e.key === 'Enter') {
      const updateTags = [...tags];
      setInputValue('');

      if (updateTags.includes(inputValue) || inputValue == '') {
        return;
      } else {
        updateTags.push(inputValue);
        dispatch(setWriteContent({ type: 'tags', value: updateTags }));
      }
    }
  };

  const removeTag = e => {
    const updateTags = [...tags];
    var delIndex = updateTags.indexOf(e.target.innerText);
    updateTags.splice(delIndex, 1);
    dispatch(setWriteContent({ type: 'tags', value: updateTags }));
  };

  return (
    <TagsContainer isGuide={isGuide}>
      {tags.map(tag => {
        return (
          <div key={tag} className='tag-wrapper' onClick={removeTag}>
            <div className='tag'>{tag}</div>
          </div>
        );
      })}
      <input
        className='tag-input'
        type='text'
        placeholder='태그를 입력하세요'
        onClick={popupGuide}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        onKeyUp={pushTag}
      />
      <div className='guide-box-positioner'>
        <div className={isGuide ? 'tag-input-guide-box guide-active' : 'tag-input-guide-box'}>
          <p>쉼표 혹는 엔터를 입력하여 태그를 등록할 수 있습니다.</p>
          <p>등록된 태그를 클릭하면 사라집니다.</p>
        </div>
      </div>
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--text1);
  font-size: 1.125rem;

  @keyframes create {
    from {
      height: 0;
      opacity: 0;
    }

    to {
      height: 100%;
      opacity: 1;
    }
  }

  .tag-wrapper {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    height: 2rem;

    .tag {
      display: flex;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      background: var(--bg-element2);
      color: var(--primary1);
      font-size: 1rem;
      animation: create 0.125s linear;
      transition: all 0.125s linear;
      cursor: pointer;
    }
  }

  .tag-input {
    display: inline-flex;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    outline: none;
    border: none;
    background: transparent;
    color: var(--text1);
    font-size: 1.125rem;
    line-height: 2rem;
    cursor: text;
  }

  @keyframes slidein {
    from {
      top: -1.5rem;
      opacity: 0;
    }

    to {
      top: 0;
      opacity: 1;
    }
  }

  .guide-box-positioner {
    display: flex;
    width: 100%;
    position: relative;

    .tag-input-guide-box {
      position: absolute;
      z-index: 1;
      padding: 0.5rem 0.8rem;
      background-color: #2e2e2e;
      color: #adb5bd;
      font-size: 0.8rem;
      line-height: 1.5;
      letter-spacing: 0.1rem;
      transition: all 0.25s ease-in;
      opacity: ${props => (props.isGuide ? '1' : '0')};
    }

    .guide-active {
      animation: slidein 0.25s;
    }
  }
`;

export default Tags;

import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiMoreVertical } from 'react-icons/fi';
import { tabStyle } from '../../../styles/postlistnavbar';

const More = () => {
  const navigate = useNavigate();
  const [isActiveBox, setIsActiveBox] = useState(false);
  const moreBoxRef = useRef();
  const moreRef = useRef();
  const moreContentList = [
    {
      name: '공지사항',
      path: '',
    },
    {
      name: '태그 목록',
      path: '/tags',
    },
    {
      name: '만든이',
      path: '',
    },
  ];

  useEffect(() => {
    const clickOutside = e => {
      if (isActiveBox && !moreBoxRef.current.contains(e.target) && !moreRef.current.contains(e.target)) {
        setIsActiveBox(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => document.removeEventListener('mousedown', clickOutside);
  }, [isActiveBox]);

  return (
    <MoreContainer>
      <div className='more-icon' ref={moreBoxRef} onClick={() => setIsActiveBox(!isActiveBox)}>
        <FiMoreVertical className='icon' />
      </div>
      <MoreBox ref={moreRef} isActiveBox={isActiveBox}>
        <ul>
          {moreContentList.map(content => (
            <li
              key={content.name}
              className='content'
              onClick={() => {
                navigate(content.path);
                setIsActiveBox(false);
              }}
            >
              {content.name}
            </li>
          ))}
        </ul>
      </MoreBox>
    </MoreContainer>
  );
};

const MoreContainer = styled.div`
  position: relative;

  .more-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--postlist-navbar-more-btn-color);

    .icon {
      font-size: 1.4rem;
    }
  }
`;

const MoreBox = styled.div`
  ${tabStyle}
  top: 160%;
  border: 1px solid var(--postlist-navbar-more-border-top);
  opacity: ${({ isActiveBox }) => (isActiveBox ? '1' : '0')};
  transform: ${({ isActiveBox }) => (isActiveBox ? 'scale(1)' : 'scale(0)')};

  .content {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--post-border-top);
    cursor: pointer;

    :hover {
      color: var(--a-tag-hover-text);
    }

    :nth-child(1) {
      border-top: none;
    }
  }
`;

export default More;

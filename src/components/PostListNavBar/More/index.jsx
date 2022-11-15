import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { closeToggle } from '../../../utils/closetoggle';
import { FiMoreVertical } from 'react-icons/fi';
import { tabStyle } from '../../../styles/postlistnavbar';

const More = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);
  const toggleBoxRef = useRef();
  const toggleBtnRef = useRef();
  const [moreContentList, setMoreContentList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { moredata },
        } = await axios.get('data/postlist/more.json');
        setMoreContentList(moredata);
      })();
    } catch (error) {
      console.log('error => ', error);
    }
  }, []);

  useEffect(() => {
    const clickOutside = e => {
      if (isToggle && !toggleBoxRef.current.contains(e.target) && !toggleBtnRef.current.contains(e.target)) {
        setIsToggle(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isToggle]);

  return (
    <MoreContainer>
      <div className='more-icon' ref={toggleBtnRef} onClick={() => setIsToggle(!isToggle)}>
        <FiMoreVertical className='icon' />
      </div>
      <MoreBox ref={toggleBoxRef} isToggle={isToggle}>
        <ul>
          {moreContentList.map(content => (
            <li
              key={content.name}
              className='content'
              onClick={() => {
                navigate(content.path);
                setIsToggle(false);
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
  opacity: ${({ isToggle }) => (isToggle ? '1' : '0')};
  transform: ${({ isToggle }) => (isToggle ? 'scale(1)' : 'scale(0)')};

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

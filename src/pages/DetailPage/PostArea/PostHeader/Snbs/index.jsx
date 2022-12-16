import { useEffect, useState, useRef } from 'react';
import LikeBtn from '../../../../../components/LikeBtn';
import Share from './Share';
import styled from 'styled-components';

const Snbs = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  const snbRef = useRef();

  const handleScroll = () => {
    const snbTop = snbRef.current.offsetTop;
    if (ScrollY > snbTop - 112) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <SnbsPositioner ref={snbRef}>
      <div className={ScrollActive ? 'fixed' : ''}>
        <SnbContainer className='snb-container'>
          <LikeBtn activeClassName='minwidth-1024px-active' direction='column' />
          <Share />
        </SnbContainer>
      </div>
    </SnbsPositioner>
  );
};

const SnbsPositioner = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: 4;

  .fixed {
    position: fixed;
    top: 112px;
  }
`;

const SnbContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  left: -7rem;
  padding: 0.5rem;
  width: 4rem;
  border: 1px solid var(--border4);
  border-radius: 2rem;
  background: var(--bg-element2);

  .like-icon-container,
  .icon-circle-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--border3);
    border-radius: 1.5rem;
    cursor: pointer;

    &:hover {
      border-color: var(--text1);
      color: var(--text1);
    }

    svg {
      width: 24px;
      height: 24px;
      pointer-events: none;
    }
  }

  @keyframes spring {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }

  .minwidth-1024px-active {
    animation: spring 0.25s 2;
    border-color: var(--primary2);
    background: var(--primary2);
    color: var(--button-text);

    &:hover {
      border-color: rgb(56, 217, 169);
      background: rgb(56, 217, 169);
      color: var(--button-text);
    }
  }

  .like-count {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text2);
    line-height: 1;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export default Snbs;

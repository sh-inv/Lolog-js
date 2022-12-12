import { useEffect, useState, useRef } from 'react';
import Like from './Like';
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
        <SnbContainer>
          <Like />
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

    svg {
      width: 24px;
      height: 24px;
      pointer-events: none;
    }
  }
`;

export default Snbs;

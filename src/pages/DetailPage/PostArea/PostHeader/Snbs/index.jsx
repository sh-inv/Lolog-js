import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';
import ContentRouter from './ContentRouter';
import LikeAndShare from './LikeAndShare';

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
      <LikeAndShare ScrollActive={ScrollActive} />
      <ContentRouter ScrollActive={ScrollActive} />
    </SnbsPositioner>
  );
};

const SnbsPositioner = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: 15;
  .fixed {
    position: fixed;
    top: 112px;
  }
`;

export default Snbs;

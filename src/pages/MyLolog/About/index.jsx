import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import styled from 'styled-components';

const About = () => {
  const [introduction, setIntroduction] = useState('');
  const [isModify, setIsModify] = useState(false);

  const onModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };

  const getIntro = e => {
    setIntroduction(e.target.value);
  };

  useEffect(() => {
    const intro = {
      intro: "It's just one part of me, that you know of. 😀",
    };
    setIntroduction(intro.intro);
  }, []);

  return (
    <AboutContainer>
      <div className='button-wrapper'>
        <Button text={isModify ? '저장하기' : '수정하기'} onClick={onModify} />
      </div>
      <div className='intro-wrapper'>{isModify ? <textarea onChange={getIntro} value={introduction}></textarea> : <p>{introduction}</p>}</div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  .button-wrapper {
    display: flex;
    margin-bottom: 1.5rem;
    -webkit-box-pack: end;
    justify-content: flex-end;

    button {
      height: 2.5rem;
      font-size: 1.125rem;
    }
  }

  .intro-wrapper {
    width: 768px;
    margin-left: auto;
    margin-right: auto;

    font-size: 1.125rem;
    color: var(--text1);
    transition: color 0.125s ease-in 0s;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;

    textarea {
      width: 100%;
      height: 10rem;
      background: transparent;
      border: none;
      outline: none;
      overflow: hidden;
      resize: none;
      font-size: inherit;
    }

    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
`;

export default About;

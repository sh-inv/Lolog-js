import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Button from '../../../components/Button';
import { AboutMaxWidth768px } from '../../../styles/media';

const About = () => {
  const [about, setAbout] = useState('');
  const [isAbout, setIsAbout] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const onModify = () => {
    setIsModify(true);
  };

  const getIntro = e => {
    setAbout(e.target.value);
  };

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwNDkyNjgxfQ.lbkgkD5qWDGhlQygJq2sPcw750NBdiF-gdyzm2txSZs`;

  useEffect(() => {
    const loader = async () => {
      try {
        const { data } = await apiClient.get('lolog/10/about');
        setAbout(data.about.about_blog);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  const modifyConfirm = async () => {
    const body = {
      about_blog: about,
    };
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await apiClient.patch('lolog/10/about', body, config);
      setAbout(body.about_blog);
      setIsModify(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AboutContainer>
      <div className='button-wrapper'>
        <Button text={isModify ? '저장하기' : '수정하기'} color='teal' onClick={isModify ? modifyConfirm : onModify} />
      </div>
      <div className='intro-wrapper'>{isModify ? <textarea onChange={getIntro} value={about}></textarea> : <p>{about}</p>}</div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  ${AboutMaxWidth768px};

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

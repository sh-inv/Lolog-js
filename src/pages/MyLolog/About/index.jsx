import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiClient } from '../../../api';
import Button from '../../../components/Button';
import NoAbout from './NoAbout';
import { AboutMaxWidth768px } from '../../../styles/media';

const About = () => {
  const [about, setAbout] = useState('');
  const [isAbout, setIsAbout] = useState(false);
  const [isOwner, setIsOwner] = useState(0);
  const [isModify, setIsModify] = useState(false);

  const onModify = () => {
    setIsModify(true);
  };

  const getIntro = e => {
    setAbout(e.target.value);
  };

  useEffect(() => {
    const loader = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get('about/10', config);
        setAbout(data.about.about_blog);
        !data.about.about_blog && setIsAbout(true);
        console.log('소개 길이', data.about.about_blog.length);
        // setIsOwner(Number(data.about.is_owner));
        console.log('리스폰스:', data);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  console.log('"about" :', about);
  console.log('isAbout :', isAbout);

  const modifyConfirm = async () => {
    const body = {
      about_blog: about,
    };
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.patch('about', body, config);
      setAbout(body.about_blog);
      setIsModify(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AboutContainer>
        <div className='button-wrapper'>
          <Button text={isModify ? '저장하기' : '수정하기'} color='teal' onClick={isModify ? modifyConfirm : onModify} />
        </div>
        <div className='intro-wrapper'>{isModify ? <textarea placeholder='당신은 어떤사람인가요? 당신에 대해 알려주세요!' onChange={getIntro} value={about} /> : !about ? <NoAbout onModify={onModify} /> : <p>{about}</p>}</div>
      </AboutContainer>
      {/* {(about || !isAbout) && (
        <AboutContainer>
          <div className='button-wrapper'>
            <Button text={isModify ? '저장하기' : '수정하기'} color='teal' onClick={isModify ? modifyConfirm : onModify} />
          </div>
          <div className='intro-wrapper'>{isModify ? <textarea placeholder='당신은 어떤사람인가요? 당신에 대해 알려주세요!' onChange={getIntro} value={about} /> : <p>{about}</p>}</div>
        </AboutContainer>
      )}
      {isAbout && (
        <AboutContainer>
          <div className='button-wrapper'>{isModify === true && <Button text='저장하기' color='teal' onClick={isModify ? modifyConfirm : onModify} />}</div>
          <div className='intro-wrapper'>{isModify ? <textarea placeholder='당신은 어떤사람인가요? 당신에 대해 알려주세요!' onChange={getIntro} value={about} /> : <NoAbout onModify={onModify} />}</div>
        </AboutContainer>
      )} */}
    </>
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

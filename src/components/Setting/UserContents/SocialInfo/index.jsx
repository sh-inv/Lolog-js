import { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import EditButton from '../../../EditButton';
import Button from '../../../Button';
import styled from 'styled-components';
import { text2 } from '../../../../styles/color';

const SocialInfo = () => {
  const [social, setSocial] = useState('');
  const [isModifySocialInfo, setisModifySocialInfo] = useState(false);

  const onModify = () => {
    isModifySocialInfo ? setisModifySocialInfo(false) : setisModifySocialInfo(true);
  };

  const getSocial = e => {
    setSocial(e.target.value);
  };

  const info = [
    {
      id: 1,
      icon: <MdEmail className='icon' />,
      placeholder: '이메일을 입력하세요.',
    },
    {
      id: 2,
      icon: <AiFillGithub className='icon' />,
      placeholder: 'Github 계정을 입력하세요.',
    },
    {
      id: 3,
      icon: <AiOutlineTwitter className='icon' />,
      placeholder: 'Twitter 계정을 입력하세요.',
    },
    {
      id: 4,
      icon: <AiFillFacebook className='icon' />,
      placeholder: 'http://www.facebook.com/',
    },
    {
      id: 5,
      icon: <AiFillHome className='icon' />,
      placeholder: '홈페이지 주소를 입력하세요.',
    },
  ];

  useEffect(() => {
    const contents = {
      social: { email: 'you8inpark@gmail.com', github: 'daydreamplace', twitter: 'eden', facebook: 'eden', url: 'dev-eden.shop' },
    };
    setSocial(contents.social);
  }, []);

  return (
    <>
      {isModifySocialInfo ? (
        <>
          <SocialInfoContainer>
            <ul>
              {info.map(content => (
                <li key={content.id}>
                  {content.icon}
                  <input className='modify-input' type='text' placeholder={content.placeholder} />
                </li>
              ))}
            </ul>
          </SocialInfoContainer>
          <Button
            onClick={() => {
              setisModifySocialInfo(false);
            }}
            text='저장'
            className='confirm-button'
          />
        </>
      ) : (
        <>
          <SocialInfoContainer>
            <ul>
              <li>
                <MdEmail className='icon' />
                <span>{social.email}</span>
              </li>
              <li>
                <AiFillGithub className='icon' />
                <span>{social.github}</span>
              </li>
              <li>
                <AiOutlineTwitter className='icon' />
                <span>{social.twitter}</span>
              </li>
              <li>
                <AiFillFacebook className='icon' />
                <span>{social.facebook}</span>
              </li>
              <li>
                <AiFillHome className='icon' />
                <span>{social.url}</span>
              </li>
            </ul>
          </SocialInfoContainer>
          <div className='edit-wrapper'>
            <EditButton text='수정' onClick={onModify} />
          </div>
        </>
      )}
    </>
  );
};

const SocialInfoContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: ${text2};
  line-height: 1.5;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 0.5rem;

      .icon {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        margin-right: 0.5rem;
        flex-shrink: 0;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`;

export default SocialInfo;

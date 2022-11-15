import { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import EditButton from '../../../EditButton';
import Button from '../../../Button';
import styled from 'styled-components';
import { backgroundElement1, border1, border3, text2, primary1, primary2, buttonText } from '../../../../styles/color';

const SocialInfo = () => {
  const [isModifySocialInfo, setisModifySocialInfo] = useState(false);
  const [socialInfo, setSocialInfo] = useState({
    email: '',
    github: '',
    twitter: '',
    facebook: '',
    url: '',
  });

  const onModify = () => {
    isModifySocialInfo ? setisModifySocialInfo(false) : setisModifySocialInfo(true);
  };

  useEffect(() => {
    const contents = {
      social: { email: 'you8inpark@gmail.com', github: 'daydreamplace', twitter: 'eden', facebook: 'eden', url: 'dev-eden.shop' },
    };
    setSocialInfo({
      ...contents.social,
    });
  }, []);

  const getSocialInfo = e => {
    setSocialInfo({
      ...socialInfo,
      [e.target.name]: e.target.value,
    });
  };

  const info = [
    {
      id: 1,
      name: 'email',
      icon: <MdEmail className='icon' />,
      placeholder: '이메일을 입력하세요.',
    },
    {
      id: 2,
      name: 'github',
      icon: <AiFillGithub className='icon' />,
      placeholder: 'Github 계정을 입력하세요.',
    },
    {
      id: 3,
      name: 'twitter',
      icon: <AiOutlineTwitter className='icon' />,
      placeholder: 'Twitter 계정을 입력하세요.',
    },
    {
      id: 4,
      name: 'facebook',
      icon: <AiFillFacebook className='icon' />,
      placeholder: 'http://www.facebook.com/',
    },
    {
      id: 5,
      name: 'url',
      icon: <AiFillHome className='icon' />,
      placeholder: '홈페이지 주소를 입력하세요.',
    },
  ];

  return (
    <>
      {isModifySocialInfo ? (
        <SocialInfoContainer>
          <form>
            <ul className='modify-info'>
              {info.map(content => (
                <li key={content.id}>
                  {content.icon}
                  <input className='modify-input' type='text' name={content.name} placeholder={content.placeholder} value={socialInfo[content.name]} onChange={getSocialInfo} />
                </li>
              ))}
            </ul>
            <div className='button-wrapper'>
              <Button onClick={onModify} text='저장' className='confirm-button' />
            </div>
          </form>
        </SocialInfoContainer>
      ) : (
        <>
          <SocialInfoContainer>
            <ul className='save-info'>
              <li>
                <MdEmail className='icon' />
                <span>{socialInfo.email}</span>
              </li>
              <li>
                <AiFillGithub className='icon' />
                <span>{socialInfo.github}</span>
              </li>
              <li>
                <AiOutlineTwitter className='icon' />
                <span>{socialInfo.twitter}</span>
              </li>
              <li>
                <AiFillFacebook className='icon' />
                <span>{socialInfo.facebook}</span>
              </li>
              <li>
                <AiFillHome className='icon' />
                <span>{socialInfo.url}</span>
              </li>
            </ul>
          </SocialInfoContainer>
          <EditButtonContainer>
            <EditButton text='수정' onClick={onModify} />
          </EditButtonContainer>
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

  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    .icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }

  form {
    .modify-info {
      .modify-input {
        flex: 1 1 0%;
        display: block;
        padding: 0.5rem;

        border: 1px solid ${border3};
        border-radius: 4px;
        background: ${backgroundElement1};
        color: ${text2};
        font-size: 1rem;
        line-height: 1rem;
        outline: none;

        :focus {
          border: 1px solid ${border1};
        }
      }
    }

    li + li {
      margin-top: 1rem;
    }

    .button-wrapper {
      margin-top: 1.5rem;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;

      .confirm-button {
        background: ${primary1};
        color: ${buttonText};

        &:hover {
          background: ${primary2};
        }
      }
    }
  }

  .save-info {
    list-style: none;
    padding: 0px;
    margin: 0px;

    span {
      font-size: 1rem;
    }
  }

  li + li {
    margin-top: 0.5rem;
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 1rem;
`;

export default SocialInfo;

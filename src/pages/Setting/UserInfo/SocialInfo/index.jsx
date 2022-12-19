import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/modules/user';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import { apiClient } from '../../../../api';
import EditButton from '../../../../components/EditButton';
import Button from '../../../../components/Button';
import Toastify from '../../../../components/Toastify';
import { toast } from 'react-toastify';

const SocialInfo = () => {
  const [isModifySocialInfo, setisModifySocialInfo] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const email = user?.social_info_email;
  const github = user?.social_info_github;
  const twitter = user?.social_info_twitter;
  const facebook = user?.social_info_facebook;
  const url = user?.social_info_url;

  const onModify = () => {
    setisModifySocialInfo(true);
  };

  const getSocialInfo = e => {
    dispatch(
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onModifyConfirm = async () => {
    const body = {
      social_info_email: email,
      social_info_github: github,
      social_info_twitter: twitter,
      social_info_facebook: facebook,
      social_info_url: url,
    };
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      };
      await apiClient.patch('/users?type=social_info', body, config);
      dispatch(
        setUser({
          ...user,
          body,
        })
      );
      setisModifySocialInfo(false);
    } catch (error) {
      toast.error('이메일 형식과 url형식을 확인해주세요');
    }
  };

  const info = [
    {
      id: 1,
      name: 'social_info_email',
      icon: <MdEmail className='icon' />,
      placeholder: '이메일을 입력하세요.',
      value: email,
    },
    {
      id: 2,
      name: 'social_info_github',
      icon: <AiFillGithub className='icon' />,
      placeholder: 'Github 계정을 입력하세요.',
      value: github,
    },
    {
      id: 3,
      name: 'social_info_twitter',
      icon: <AiOutlineTwitter className='icon' />,
      placeholder: 'Twitter 계정을 입력하세요.',
      value: twitter,
    },
    {
      id: 4,
      name: 'social_info_facebook',
      icon: <AiFillFacebook className='icon' />,
      placeholder: 'http://www.facebook.com/',
      value: facebook,
    },
    {
      id: 5,
      name: 'social_info_url',
      icon: <AiFillHome className='icon' />,
      placeholder: '홈페이지 주소를 입력하세요.',
      value: url,
    },
  ];

  return (
    user && (
      <>
        {isModifySocialInfo ? (
          <SocialInfoContainer>
            <form onSubmit={e => e.preventDefault()}>
              <ul className='modify-info'>
                {info.map(content => (
                  <li key={content.id}>
                    {content.icon}
                    <input className='modify-input' type='text' name={content.name} placeholder={content.placeholder} value={content.value || ''} onChange={getSocialInfo} />
                  </li>
                ))}
              </ul>
              <div className='button-wrapper'>
                <Button onClick={onModifyConfirm} text='저장' className='confirm-button' />
              </div>
            </form>
          </SocialInfoContainer>
        ) : (
          <>
            <SocialInfoContainer>
              <ul className='save-info'>
                {email && (
                  <li>
                    <MdEmail className='icon' />
                    <span>{email}</span>
                  </li>
                )}
                {github && (
                  <li>
                    <AiFillGithub className='icon' />
                    <span>{github}</span>
                  </li>
                )}
                {twitter && (
                  <li>
                    <AiOutlineTwitter className='icon' />
                    <span>{twitter}</span>
                  </li>
                )}
                {facebook && (
                  <li>
                    <AiFillFacebook className='icon' />
                    <span>{facebook}</span>
                  </li>
                )}
                {url && (
                  <li>
                    <AiFillHome className='icon' />
                    <span>{url}</span>
                  </li>
                )}
              </ul>
            </SocialInfoContainer>
            <EditButtonContainer>
              <EditButton text='수정' onClick={onModify} />
            </EditButtonContainer>
            <Toastify />
          </>
        )}
      </>
    )
  );
};

const SocialInfoContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: var(--text2);
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

        border: 1px solid var(--border3);
        border-radius: 4px;
        background: var(--bg-element1);
        color: var(--text2);
        font-size: 1rem;
        line-height: 1rem;
        outline: none;

        :focus {
          border: 1px solid var(--border1);
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
        background: var(--primary1);
        color: var(--button-text);

        &:hover {
          background: var(--primary2);
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

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserProfileImage from '../../UserProfileImage';
import FollowButton from '../../FollowButton';

const User = () => {
  return (
    <>
      <UserContainer>
        <div className='user'>
          <Link to='/id'>
            <UserProfileImage />
          </Link>
          <div className='flex'>
            <div className='user-info'>
              <div className='user-name'>
                <Link to='/id'>Eeeee</Link>
              </div>
              <div className='description'>ben1mki가나다</div>
            </div>
          </div>
        </div>
        <FollowButton />
      </UserContainer>
      <Border />
    </>
  );
};

const UserContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .user {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    img {
      margin-bottom: 0;
      box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;

      @media screen and (max-width: 768px) {
        width: 5rem;
        height: 5rem;
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      margin-left: 1rem;

      @media screen and (max-width: 768px) {
        margin-left: 0px;
        margin-top: 1rem;
      }

      .user-name {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: bold;
        color: var(--text1);

        @media screen and (max-width: 768px) {
          font-size: 1.125rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .description {
        white-space: pre-wrap;
        font-size: 1.125rem;
        line-height: 1.5;
        margin-top: 0.25rem;
        color: var(--text2);
        letter-spacing: -0.004em;

        @media screen and (max-width: 768px) {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          letter-spacing: -0.004em;
        }
      }
    }
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background: var(--bg-element3);

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default User;

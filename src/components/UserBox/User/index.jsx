import { Link } from 'react-router-dom';
import UserProfileImage from '../../Setting/UserProfile/UserProfileImage';
import styled from 'styled-components';

const User = () => {
  return (
    <>
      <UserContainer>
        <Link to='/id'>
          <UserProfileImage />
        </Link>
        <div className='user-info'>
          <div className='user-name'>
            <Link to='/id'>Eeeee</Link>
          </div>
          <div className='description'>ben1mki가나다</div>
        </div>
      </UserContainer>
      <Border />
    </>
  );
};

const UserContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  img {
    margin-bottom: 0;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 1rem;

    .user-name {
      font-size: 1.5rem;
      line-height: 1.5;
      font-weight: bold;
      color: var(--text1);

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
    }
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background: var(--bg-element3);
`;

export default User;

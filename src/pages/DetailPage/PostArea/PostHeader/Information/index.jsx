import { useSelector } from 'react-redux';
import GetPostDate from '../../../../../components/GetPostDate';
import styled from 'styled-components';
import LikeBtn from '../../../../../components/LikeBtn';

const Information = () => {
  const { postData } = useSelector(state => state.detailData);
  const postDate = new Date(postData.post.create_at);

  return (
    <InformationContainer className='information-container'>
      <div className='information'>
        <span className='user-name'>{postData.post.login_id}</span>
        <span className='separator'>&#183;</span>
        <GetPostDate postDate={postDate} />
      </div>
      <LikeBtn activeClassName='maxwidth-1023px-active' direction='row' />
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  .information {
    color: var(--text2);
    font-size: 1rem;

    .user-name {
      color: var(--text1);
      font-weight: bold;
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .like-icon-container {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    align-items: center;
    -webkit-box-align: center;
    padding: 0 0.75rem;
    height: 1.5rem;
    border: 1px solid var(--border2);
    border-radius: 0.75rem;
    background: var(--bg-element1);
    cursor: pointer;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.75rem;
      color: var(--text3);
      pointer-events: none;
    }
    span {
      font-size: 0.75rem;
      font-weight: bold;
      color: var(--text3);
      pointer-events: none;
    }
  }

  .maxwidth-1023px-active {
    border-color: var(--primary2);
    background: var(--primary2);
    svg {
      color: white;
    }
    span {
      color: white;
    }
    .like-count {
      color: white;
    }
  }

  .like-count {
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--text3);
  }
`;

export default Information;

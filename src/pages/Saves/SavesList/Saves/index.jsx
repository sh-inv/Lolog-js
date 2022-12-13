import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetPostDate from '../../../../components/GetPostDate';
import EditButton from '../../../../components/EditButton';

const Saves = ({ id, setPostId, title, contents, created_at, onModal }) => {
  return (
    <SavesContainer>
      <Link to={`write?id=${id}&status=3`}>
        <h3>{title}</h3>
      </Link>
      <Link to={`write?id=${id}&status=3`}>
        <p>{contents}</p>
      </Link>
      <section>
        <GetPostDate postDate={created_at} />
        <EditButton
          text='삭제'
          onClick={() => {
            onModal();
            setPostId(id);
          }}
        />
      </section>
    </SavesContainer>
  );
};

const SavesContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  line-height: 1.5;
  border-bottom: 1px solid var(--border3);

  h3 {
    margin-top: 0px;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: var(--text1);
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    margin-top: 0px;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: var(--text2);
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      color: var(--text3);
    }

    button {
      color: var(--text1);
      font-size: inherit;

      &:hover {
        color: rgb(250, 82, 82);
      }
    }
  }
`;

export default Saves;

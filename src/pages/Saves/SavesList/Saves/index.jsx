import styled from 'styled-components';
import GetPostDate from '../../../../components/GetPostDate';
import EditButton from '../../../../components/EditButton';

const Saves = ({ title, contents, created_at, onModal }) => {
  return (
    <SavesContainer>
      <h3>{title}</h3>
      <p>{contents}</p>
      <section>
        <GetPostDate postDate={created_at} />
        <EditButton text='삭제' onClick={onModal} />
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

    span {
      color: var(--text3);
    }

    button {
      color: var(--text1);

      &:hover {
        color: rgb(250, 82, 82);
      }
    }
  }
`;

export default Saves;

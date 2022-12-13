import GetPostDate from '../../../../../components/GetPostDate';
import styled from 'styled-components';

const Information = ({ userId, createAt }) => {
  const postDate = new Date(createAt);

  return (
    <InformationContainer>
      <span className='user-name'>{userId}</span>
      <span className='separator'>&#183;</span>
      <GetPostDate postDate={postDate} />
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
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
`;

export default Information;

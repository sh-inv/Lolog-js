import GetPostDate from '../../../../../components/GetPostDate';
import styled from 'styled-components';

const Information = ({ userId }) => {
  return (
    <InformationContainer>
      <div className='info-wrapper'>
        <div className='information'>
          <span className='user-name'>{userId}</span>
          <span className='separator'>&#183;</span>
          <GetPostDate postDate={'November 16, 2022 11:08:00'} />
        </div>
      </div>
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: var(--text2);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .information {
    .user-name {
      color: var(--text1);
      font-weight: bold;
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export default Information;

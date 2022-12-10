import styled from 'styled-components';
import nodata from '../../../../assets/nodata.png';
import Button from '../../../../components/Button';

const NoAbout = ({ onModify }) => {
  return (
    <NoAboutContainer>
      <img alt='noabout' src={nodata} />
      <div className='message'>소개가 작성되지 않았습니다.</div>
      <Button onClick={onModify} color='teal' text='새로작성하기' />
    </NoAboutContainer>
  );
};

const NoAboutContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;

  img {
    display: block;
    margin-bottom: 2rem;
    width: 20rem;
    height: 20rem;
  }

  .message {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--text3);
  }
`;

export default NoAbout;

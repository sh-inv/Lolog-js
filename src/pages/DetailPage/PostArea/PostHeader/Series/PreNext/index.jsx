import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const PreNext = () => {
  const { postData } = useSelector(state => state.detailData);
  const navigate = useNavigate();

  const index = postData.series.findIndex(i => i.post_id === postData.post.post_id);
  const currentSort = index + 1;
  const sortCount = postData.series.length;

  const preAbled = currentSort !== 1;
  const nextAbled = currentSort !== sortCount;

  const goToPre = () => {
    preAbled && navigate(`/posts/${postData.series[index - 1].post_id}`);
  };

  const goToNext = () => {
    nextAbled && navigate(`/posts/${postData.series[index + 1].post_id}`);
  };

  return (
    <PreNextContainer>
      <div className='location-number'>{`${currentSort}/${sortCount}`}</div>
      <div className='btn-wrapper'>
        <button className={preAbled ? '' : 'disabled'} onClick={goToPre}>
          <MdKeyboardArrowLeft />
        </button>
        <button className={nextAbled ? '' : 'disabled'} onClick={goToNext}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </PreNextContainer>
  );
};

const PreNextContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .location-number {
    color: var(--text3);
    font-size: 0.875rem;
  }

  .btn-wrapper {
    display: flex;
    margin-left: 1.125rem;
    button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0px;
      outline: none;
      border: 1px solid var(--border4);
      border-radius: 50%;
      background: var(--bg-element1);
      color: var(--primary1);
      font-size: 1.25rem;
      cursor: pointer;
      svg {
        color: var(--primary1);
        pointer-events: none;
      }
    }
    .disabled {
      cursor: default;
      svg {
        opacity: 0.5;
      }
    }
  }
`;

export default PreNext;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { text2 } from '../../../../styles/color';

const PostInfo = () => {
  const detailDate = date => {
    const milliSeconds = new Date() - date;
    const seconds = milliSeconds / 1000;
    if (seconds < 300) return `방금 전`;
    const minutes = seconds / 60;
    if (5 < minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  const nowDate = detailDate('글쓴시간');

  return (
    <PostInfoContainer>
      <Link to=''>
        <h4 className='post-title'>Reactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbu</h4>
        <div className='main-text'>
          fkuvbajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbufkuvbajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbufkuvbajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbufkuvbajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbuReactsdfbsdbfsdbgsdfbasdfasdfasdfasdfadsfksajdlfnlkajnsdklvanbsjildvaklsjdnvljabvfahsdbvalsdbvabdsvbaiasdfaadefbvadfbvadfkuvbaeukvbu
        </div>
      </Link>
      <div className='sub-info'>약 7시간 전 · 0개의 댓글</div>
    </PostInfoContainer>
  );
};

const PostInfoContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 1rem;

  .post-title {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--text);
  }

  .main-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* height: 3.9375rem; */
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${text2};
  }

  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${text2};
  }
`;

export default PostInfo;

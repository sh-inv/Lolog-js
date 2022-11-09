import { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const More = () => {
  const navigate = useNavigate();
  const [activeBox, setActiveBox] = useState(false);
  const moreContentList = [
    {
      name: '공지사항',
      path: '',
    },
    {
      name: '태그 목록',
      path: '',
    },
    {
      name: '만든이',
      path: '',
    },
  ];

  return (
    <MoreContainer>
      <div className='more-icon' onClick={() => setActiveBox(!activeBox)}>
        <FiMoreVertical className='icon' />
      </div>
      <MoreBox activeBox={activeBox}>
        <ul>
          {moreContentList.map(content => (
            <li key={content.name} className='content' onClick={() => navigate(content.path)}>
              {content.name}
            </li>
          ))}
        </ul>
      </MoreBox>
    </MoreContainer>
  );
};

const MoreContainer = styled.div`
  position: relative;

  .more-icon {
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
      font-size: 1.4rem;
    }
  }
`;

const MoreBox = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 12rem;
  margin-top: 0.5rem;
  border: 1px solid #4d4d4d;
  background: #1e1e1e;
  opacity: ${({ activeBox }) => (activeBox ? '1' : '0')};
  transform: ${({ activeBox }) => (activeBox ? 'scale(1)' : 'scale(0)')};
  z-index: 5;

  .content {
    cursor: pointer;
    :hover {
      color: #96f2d7;
    }
  }
`;

export default More;

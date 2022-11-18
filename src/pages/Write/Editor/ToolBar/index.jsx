import styled from 'styled-components';
import { FaBold, FaItalic, FaRemoveFormat } from 'react-icons/fa';
import { MdFormatQuote } from 'react-icons/md';
import { FiLink2 } from 'react-icons/fi';
import { SlPicture } from 'react-icons/sl';
import ToolBarHTagWrapper from './ToolBarHTagWrapper';
import ToolBarBtnWrapper from './ToolBarBtnWrapper';

const ToolBar = () => {
  const ToolBarHTagList = ['H1', 'H2', 'H3', 'H4'];
  const ToolBarBtnLIstMid = [
    { type: 'bold', reactIcon: <FaBold /> },
    { type: 'italic', reactIcon: <FaItalic /> },
    { type: 'remove', reactIcon: <FaRemoveFormat /> },
  ];

  const ToolBarBtnListRight = [
    { type: 'quote', reactIcon: <MdFormatQuote /> },
    { type: 'link', reactIcon: <FiLink2 /> },
    { type: 'picture', reactIcon: <SlPicture /> },
  ];

  return (
    <ToolBarWrapper>
      {ToolBarHTagList.map(tag => {
        return <ToolBarHTagWrapper key={tag} type={tag} />;
      })}
      <div className='vertical-line' />
      {ToolBarBtnLIstMid.map(btn => {
        return (
          <ToolBarBtnWrapper key={btn.type} type={btn.type}>
            {btn.reactIcon}
          </ToolBarBtnWrapper>
        );
      })}
      <div className='vertical-line' />
      {ToolBarBtnListRight.map(btn => {
        return (
          <ToolBarBtnWrapper key={btn.type} type={btn.type}>
            {btn.reactIcon}
          </ToolBarBtnWrapper>
        );
      })}
    </ToolBarWrapper>
  );
};

const ToolBarWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    outline: none;
    border: none;
    background: none;
    font-size: 1rem;
    color: var(--text3);

    &:hover {
      color: var(--text1);
      background: var(--bg-element2);
      cursor: pointer;
    }
  }

  .vertical-line {
    width: 1px;
    height: 1.25rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background: var(--border3);
  }
`;

export default ToolBar;

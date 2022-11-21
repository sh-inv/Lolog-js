import { useState, useEffect } from 'react';
import Tags from './Tags';
import ToolBar from './ToolBar';
import LinkModal from './LinkModal';
import EditorFooter from './EditorFooter';
import styled from 'styled-components';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [isLinkModal, setIsLinkModal] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedTool) {
      let copy = content;
      let updateContent = '';

      if (selectedTool[0] === 'H') updateContent = hTagToolHandler(copy, selectedTool);
      if (selectedTool === 'bold' || selectedTool === 'italic' || selectedTool === 'remove' || selectedTool === 'quote') updateContent = textEffectHandler(copy, selectedTool);
      if (selectedTool === 'link') setIsLinkModal(true);

      setContent(updateContent);
      setSelectedTool(null);
    }
  }, [selectedTool]);

  const hTagToolHandler = (currentContent, tool) => {
    let toolToValue = '';
    let updateContent = '';
    const isAlreadyHashtag = currentContent.split(' ')[0].includes('#');

    switch (tool) {
      case 'H1':
        toolToValue = '# ';
        break;
      case 'H2':
        toolToValue = '## ';
        break;
      case 'H3':
        toolToValue = '### ';
        break;
      case 'H4':
        toolToValue = '#### ';
        break;
      default:
        break;
    }

    if (isAlreadyHashtag) {
      let result = currentContent.split(' ');
      result[0] = toolToValue;
      updateContent = result.join('');
    } else {
      updateContent = toolToValue + currentContent;
    }

    return updateContent;
  };

  const textEffectHandler = (currentContent, tool) => {
    let toolToValue = '';
    let updateContent = '';
    const isAlreadyQuote = currentContent.split(' ')[0].includes('>');

    switch (tool) {
      case 'bold':
        toolToValue = '**텍스트**';
        break;
      case 'italic':
        toolToValue = '_텍스트_';
        break;
      case 'remove':
        toolToValue = '~~텍스트~~';
        break;
      case 'quote':
        toolToValue = '> ';
        break;
      default:
        break;
    }

    if (toolToValue === '> ') {
      if (isAlreadyQuote) {
        let result = currentContent.split(' ');
        result[0] = '';
        updateContent = result.join('');
      } else {
        updateContent = toolToValue + currentContent;
      }
    } else {
      updateContent = currentContent + toolToValue;
    }

    return updateContent;
  };

  const linkHandler = linkValue => {
    let copy = content;
    const toolToValue = `[링크텍스트](${linkValue})`;
    const updateContent = copy + toolToValue;
    setContent(updateContent);
    setIsLinkModal(false);
  };

  return (
    <EditorContainer className='editor-container'>
      <textarea className='title' placeholder='제목을 입력하세요' onChange={e => setTitle(e.target.value)} />
      <div className='dividing-line' />
      <Tags />
      <ToolBar setSelectedTool={setSelectedTool} />
      {isLinkModal && <LinkModal setIsLinkModal={setIsLinkModal} linkHandler={linkHandler} />}
      <pre className='write-zone'>
        <textarea placeholder='당신의 이야기를 적어보세요...' value={content} onChange={e => setContent(e.target.value)} />
      </pre>
      <EditorFooter title={title} content={content} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .title,
  textarea {
    padding: 0px;
    width: 100%;
    height: 66px;
    line-height: 1.5;
    resize: none;
    outline: none;
    border: none;
    background: transparent;
    color: var(--text1);
    font-size: 2.75rem;
    font-weight: bold;
    cursor: text;
  }

  .dividing-line {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 6px;
    width: 4rem;
    border-radius: 1px;
    background: rgb(73, 80, 87);
  }

  .write-zone {
    textarea {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text3);
      font-style: italic;
      direction: ltr;
      cursor: text;
      caret-color: #56b6c2 !important;
    }
  }
`;

export default Editor;

import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import styled from 'styled-components';

const SettingDescription = () => {
  const { title, description } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const descriptionLenght = description.replace(/<br\s*\/?>/gm, '\n').length;

  return (
    <SettingDescriptionContainer>
      <h4>{title}</h4>
      <textarea placeholder='당신의 포스트를 짧게 소개해보세요.' value={description} onChange={e => dispatch(setWriteContent({ type: 'description', value: e.target.value }))} maxLength={150} />
      <p style={{ color: descriptionLenght >= 150 ? 'var(--prism-code-3)' : 'var(--text1)' }}>{descriptionLenght}/150</p>
    </SettingDescriptionContainer>
  );
};

const SettingDescriptionContainer = styled.div`
  margin-top: 1.5rem;

  textarea {
    margin-top: 0.5rem;
    padding: 0.75rem 1rem;
    width: 100%;
    height: 7.375rem;
    resize: none;
    outline: none;
    border: none;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    background: var(--bg-element7);
    color: var(--text1);
    line-height: 1.5;
    font-size: 0.875rem;
  }

  p {
    text-align: right;
    margin-top: 0.25rem;
    color: var(--text3);
    font-size: 0.75rem;
  }
`;

export default SettingDescription;

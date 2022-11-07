import styled from 'styled-components';
import { primary1 } from '../../styles/color';

const ModifyButton = ({ onModify, text, onModal }) => {
  return <Modify onClick={(onModify, onModal)}>{text}</Modify>;
};

const Modify = styled.button`
  display: inline;
  padding: 0px;

  background: none;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  color: ${primary1};
  text-decoration: underline;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export default ModifyButton;

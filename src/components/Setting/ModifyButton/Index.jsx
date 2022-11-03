import styled from 'styled-components';

const ModifyButton = ({ onModify }) => {
  return <Modify onClick={onModify}>수정</Modify>;
};

const Modify = styled.button`
  outline: none;
  padding: 0px;
  border: none;
  display: inline;
  font-size: 1rem;
  line-height: 1.5;
  color: #12b886;
  text-decoration: underline;
  background: none;
  cursor: pointer;
`;

export default ModifyButton;

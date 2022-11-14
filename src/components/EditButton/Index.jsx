import styled from 'styled-components';
import { primary1, primary2 } from '../../styles/color';

const EditButton = ({ text, onClick, ...props }) => {
  return (
    <Edit onClick={onClick} {...props}>
      {text}
    </Edit>
  );
};

const Edit = styled.button`
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
    color: ${primary2};
  }
`;

export default EditButton;

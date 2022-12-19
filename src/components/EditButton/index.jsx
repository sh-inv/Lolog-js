import styled from 'styled-components';

const EditButton = ({ text, onClick, className }) => {
  return (
    <Edit onClick={onClick} className={className}>
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
  color: var(--primary1);
  text-decoration: underline;
  outline: none;

  &:hover {
    cursor: pointer;
    color: var(--primary2);
  }
`;

export default EditButton;

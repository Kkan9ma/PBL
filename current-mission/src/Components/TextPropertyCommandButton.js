import React from 'react';
import styled from 'styled-components';

const StyledDefaultButton = styled.button`
  width: 55px;
  height: 55px;
  font-size: 10px;
  font-weight: ${(props) => (props.isSelected ? '600' : '')};
  color: ${(props) => (props.isSelected ? '#13C843' : '#333')};
  background-color: '#FFFFFF';
  border-radius: 50%;
  margin: 2px 2px 10px 2px;
  outline: 0;
`;

function TextPropertyCommandButton({ command, value, onClick, isSelected }) {
  return (
    <StyledDefaultButton
      type="button"
      className="editor__button"
      data-command={command}
      onClick={onClick}
      isSelected={isSelected}
    >
      {value}
    </StyledDefaultButton>
  );
}

export default TextPropertyCommandButton;

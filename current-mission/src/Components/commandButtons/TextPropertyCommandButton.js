import React from 'react';
import styled from 'styled-components';
import { StyledDefaultButton } from './style';

const StyledTextPropertyCommandButton = styled(StyledDefaultButton)`
  font-weight: ${(props) => (props.isSelected ? '600' : '')};
  color: ${(props) => (props.isSelected ? '#13C843' : '#333')};
`;

function TextPropertyCommandButton({ command, value, onClick, isSelected }) {
  return (
    <StyledTextPropertyCommandButton
      type="button"
      className="editor__button"
      data-command={command}
      onClick={onClick}
      isSelected={isSelected}
    >
      {value}
    </StyledTextPropertyCommandButton>
  );
}

export default TextPropertyCommandButton;

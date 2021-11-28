import React from 'react';
import styled from 'styled-components';

const StyledDefaultButton = styled.button`
  width: 55px;
  height: 55px;
  font-size: 10px;
  color: #333;
  border-radius: 50%;
  margin: 2px 2px 10px 2px;
  outline: 0;
`;

function DocumentElementCommandsButton({ command, value, onClick }) {
  return (
    <StyledDefaultButton
      type="button"
      className="editor__button"
      data-command={command}
      onClick={onClick}
    >
      {value}
    </StyledDefaultButton>
  );
}

export default DocumentElementCommandsButton;

import React from 'react';
import { StyledDefaultButton } from './style';

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

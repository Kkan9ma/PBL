import React from 'react';
import TextPropertyCommandsButtonList from '../commandButtonLists/TextPropertyCommandsButtonList';
import { StyledDefaultToolbar } from './style.js';

function TextPropertyCommandsToolbar({
  commands,
  activatedCommands,
  handleClick,
}) {
  return (
    <StyledDefaultToolbar
      className="editor__toolbar"
      data-toolbar="text-property-commands"
    >
      <TextPropertyCommandsButtonList
        commands={commands}
        activatedCommands={activatedCommands}
        handleClick={handleClick}
      />
    </StyledDefaultToolbar>
  );
}

export default TextPropertyCommandsToolbar;

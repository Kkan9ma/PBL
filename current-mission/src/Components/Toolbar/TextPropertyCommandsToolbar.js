import React from 'react';
import TextPropertyCommandsButtonList from '../TextPropertyCommandsButtonList';

function TextPropertyCommandsToolbar({
  commands,
  activatedCommands,
  handleClick,
}) {
  return (
    <ul
      className="editor__toolbar"
      data-toolbar="text-property-commands"
      style={{ margin: '0', padding: '0' }}
    >
      <TextPropertyCommandsButtonList
        commands={commands}
        activatedCommands={activatedCommands}
        handleClick={handleClick}
      />
    </ul>
  );
}

export default TextPropertyCommandsToolbar;

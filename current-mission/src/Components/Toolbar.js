import React from 'react';
import CommandsButtonList from './CommandsButtonList';

function Toolbar({ commands, activatedCommands, handleClick }) {
  return (
    <ul className="editor__toolbar" style={{ margin: '0', padding: '0' }}>
      <CommandsButtonList
        commands={commands}
        activatedCommands={activatedCommands}
        handleClick={handleClick}
      />
    </ul>
  );
}

export default Toolbar;

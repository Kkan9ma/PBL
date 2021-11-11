import React, { useState } from 'react';
import Toolbar from './Component/Toolbar';
import ContentContainer from './Component/ContentContainer';
import { commandsList } from './constants.js';

function Editor() {
  const [activatedCommands, setActivatedCommands] = useState([]);

  const handleButtonActivatedState = () => {
    const currentCommand = commandsList
      .map(({ command }) => command)
      .filter((command) => document.queryCommandState(command));

    setActivatedCommands(currentCommand);
  };

  return (
    <>
      <div className="editor">
        <Toolbar
          commandsList={commandsList}
          activatedCommands={activatedCommands}
          handleButtonActivatedState={handleButtonActivatedState}
        />
        <ContentContainer handleKeyup={handleButtonActivatedState} />
      </div>
    </>
  );
}

export default Editor;

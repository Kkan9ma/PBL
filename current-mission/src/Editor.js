import React, { useState } from 'react';
import Toolbar from './Components/Toolbar';
import ContentContainer from './Components/ContentContainer';
import { commandsList } from './utils/commandsList.js';

function Editor() {
  const [activatedCommands, setActivatedCommands] = useState([]);

  const handleButtonActivatedState = () => {
    const currentCommand = commandsList
      .map(({ command }) => command)
      .filter((command) => document.queryCommandState(command));

    setActivatedCommands(currentCommand);
  };

  return (
    <div className="editor">
      <h1>Simple Editor</h1>
      <Toolbar
        commandsList={commandsList}
        activatedCommands={activatedCommands}
        handleButtonActivatedState={handleButtonActivatedState}
      />
      <ContentContainer handleKeyup={handleButtonActivatedState} />
    </div>
  );
}

export default Editor;

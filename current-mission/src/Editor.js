import React, { useState, useRef } from 'react';
import Toolbar from './Components/Toolbar';
import ContentContainer from './Components/ContentContainer';
import { getCommands, getCommandsMap } from './commands/commandsUtils';

function Editor() {
  const [activatedCommands, setActivatedCommands] = useState([]);
  const [HTMLResult, setHTMLResult] = useState('');
  const contentContainerRef = useRef(null);
  const commands = getCommands();

  const handleActivatedCommandState = () => {
    const currentCommand = commands.filter((command) =>
      document.queryCommandState(command),
    );

    setActivatedCommands(currentCommand);
  };

  const executeCommand = (command) => {
    const commandMap = getCommandsMap();

    commandMap[command]();
  };

  return (
    <div className="editor">
      <h1>Simple Editor</h1>
      <Toolbar
        commands={commands}
        activatedCommands={activatedCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          executeCommand(command);
          handleActivatedCommandState();
          setHTMLResult(contentContainerRef.current.innerHTML);
        }}
      />
      <ContentContainer
        ref={contentContainerRef}
        handleKeyup={() => {
          handleActivatedCommandState();
          setHTMLResult(contentContainerRef.current.innerHTML);
        }}
      />
      <h3>HTML Result</h3>
      <div>{HTMLResult}</div>
    </div>
  );
}

export default Editor;

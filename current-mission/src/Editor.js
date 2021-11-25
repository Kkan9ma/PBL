import React, { useState, useRef } from 'react';
import TextPropertyCommandsToolbar from './Components/Toolbar/TextPropertyCommandsToolbar';
import ContentContainer from './Components/ContentContainer';
import { getCommands, getCommandsMap } from './commands/commandsUtils';

function Editor() {
  const [activatedCommands, setActivatedCommands] = useState([]);
  const [HTMLResult, setHTMLResult] = useState('');
  const contentContainerRef = useRef(null);
  const textPropertyCommands = getCommands('textProperty');

  const handleActivatedCommandState = () => {
    const currentCommand = textPropertyCommands.filter((command) =>
      document.queryCommandState(command),
    );

    setActivatedCommands(currentCommand);
  };

  const executeTextPropertyCommand = (command) => {
    const commandMap = getCommandsMap('textProperty');

    commandMap[command]();
  };

  return (
    <div className="editor">
      <h1>Simple Editor</h1>
      <TextPropertyCommandsToolbar
        commands={textPropertyCommands}
        activatedCommands={activatedCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          executeTextPropertyCommand(command);
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

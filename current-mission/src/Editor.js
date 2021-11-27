import React, { useState, useRef } from 'react';
import ContentContainer from './Components/ContentContainer';
import TextPropertyCommandsToolbar from './Components/Toolbar/TextPropertyCommandsToolbar';
import DocumentElementCommandsToolbar from './Components/Toolbar/DocumentElementCommandsToolbar';
import { textPropertyCommands, documentElementCommands, getCommandCategory, getCommandsMap, } from './commands/commandsUtils';

function Editor() {
  const contentContainerRef = useRef(null);
  const [HTMLResult, setHTMLResult] = useState('');
  const [activatedCommands, setActivatedCommands] = useState([]);

  const handleActivatedCommandState = () => {
    const currentCommand = textPropertyCommands.filter((command) =>
      document.queryCommandState(command),
    );

    setActivatedCommands(currentCommand);
  };

  const execute = (command) => {
    const commandCategory = getCommandCategory(command);
    const commandsMap = getCommandsMap(commandCategory);

    commandsMap[command]();
  };

  return (
    <div className="editor">
      <h1>Simple Editor</h1>
      <TextPropertyCommandsToolbar
        commands={textPropertyCommands}
        activatedCommands={activatedCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          execute(command);
          handleActivatedCommandState();
          setHTMLResult(contentContainerRef.current.innerHTML);
        }}
      />
      <DocumentElementCommandsToolbar
        commands={documentElementCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          execute(command);
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

import React, { useState, useRef } from 'react';
import Toolbar from './Components/Toolbar';
import ContentContainer from './Components/ContentContainer';
import { commandsList } from './utils/commandsList.js';

function Editor() {
  const [activatedCommands, setActivatedCommands] = useState([]);
  const [HTMLResult, setHTMLResult] = useState('');
  const contentContainerRef = useRef(null);

  const handleActivatedCommandState = () => {
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
        handleClick={() => {
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

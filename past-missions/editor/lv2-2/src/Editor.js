import React, { useState, useRef } from 'react';
import * as Containers from './Components/containers';
import * as CommandUtills from './commands/commandsUtils';
import HiddenInputArea from './Components/HiddenInputArea';
import { isValidImageFileType } from './utils/uploadImageUtils';
import TextPropertyCommandsToolbar from './Components/toolbars/TextPropertyCommandsToolbar';
import DocumentElementCommandsToolbar from './Components/toolbars/DocumentElementCommandsToolbar';

function Editor() {
  const hiddenInputRef = useRef(null);
  const renderingResultRef = useRef(null);
  const contentContainerRef = useRef(null);
  const [HTMLResult, setHTMLResult] = useState('');
  const [activatedCommands, setActivatedCommands] = useState([]);

  const execute = (command, target = null) => {
    const commandCategory = CommandUtills.getCommandCategory(command);
    const commandsMap = CommandUtills.getCommandsMap(commandCategory);

    target ? commandsMap[command](target) : commandsMap[command]();
  };

  const handleActivatedCommandState = () => {
    const currentCommand = CommandUtills.textPropertyCommands.filter(
      (command) => document.queryCommandState(command),
    );

    setActivatedCommands(currentCommand);
  };

  const onUploadImage = () => {
    const currentFile = hiddenInputRef.current.files[0];

    if (isValidImageFileType(currentFile)) {
      const image = document.createElement('img');

      image.src = URL.createObjectURL(currentFile);
      contentContainerRef.current.appendChild(image);
    }
    setHTMLResult(contentContainerRef.current.innerHTML);
    renderingResultRef.current.innerHTML =
      contentContainerRef.current.innerHTML;
  };

  return (
    <div className="editor">
      <h1>Simple Editor</h1>
      <TextPropertyCommandsToolbar
        commands={CommandUtills.textPropertyCommands}
        activatedCommands={activatedCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          execute(command);
          handleActivatedCommandState();
          setHTMLResult(contentContainerRef.current.innerHTML);
          renderingResultRef.current.innerHTML =
            contentContainerRef.current.innerHTML;
        }}
      />
      <DocumentElementCommandsToolbar
        commands={CommandUtills.documentElementCommands}
        handleClick={(e) => {
          const { command } = e.target.dataset;

          execute(command, hiddenInputRef.current);
          setHTMLResult(contentContainerRef.current.innerHTML);
          renderingResultRef.current.innerHTML =
            contentContainerRef.current.innerHTML;
        }}
      />
      <section
        className="editor__container-section"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
      >
        <Containers.ContentContainer
          ref={contentContainerRef}
          handleKeyup={() => {
            handleActivatedCommandState();
            setHTMLResult(contentContainerRef.current.innerHTML);
            renderingResultRef.current.innerHTML =
              contentContainerRef.current.innerHTML;
          }}
        />
        <Containers.RenderingResultContainer
          HTMLResult={HTMLResult}
          ref={renderingResultRef}
        />
        <Containers.HTMLResultContainer HTMLResult={HTMLResult} />
      </section>
      <HiddenInputArea onChange={onUploadImage} ref={hiddenInputRef} />
    </div>
  );
}

export default Editor;

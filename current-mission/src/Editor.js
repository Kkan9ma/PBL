import React, { useState, useRef } from 'react';
import ContentContainer from './Components/ContentContainer';
import TextPropertyCommandsToolbar from './Components/toolbars/TextPropertyCommandsToolbar';
import DocumentElementCommandsToolbar from './Components/toolbars/DocumentElementCommandsToolbar';
import {
  textPropertyCommands,
  documentElementCommands,
  getCommandCategory,
  getCommandsMap,
} from './commands/commandsUtils';
import { isValidImageFileType } from './utils/uploadImageUtils';
import HiddenInputArea from './Components/HiddenInputArea';
import {
  RenderingResultContainer,
  HTMLResultContainer,
} from './Components/resultContainers';

function Editor() {
  const hiddenInputRef = useRef(null);
  const renderingResultRef = useRef(null);
  const contentContainerRef = useRef(null);
  const [HTMLResult, setHTMLResult] = useState('');
  const [activatedCommands, setActivatedCommands] = useState([]);

  const execute = (command, target = null) => {
    const commandCategory = getCommandCategory(command);
    const commandsMap = getCommandsMap(commandCategory);

    target ? commandsMap[command](target) : commandsMap[command]();
  };

  const handleActivatedCommandState = () => {
    const currentCommand = textPropertyCommands.filter((command) =>
      document.queryCommandState(command),
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
        commands={textPropertyCommands}
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
        commands={documentElementCommands}
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
        <ContentContainer
          ref={contentContainerRef}
          handleKeyup={() => {
            handleActivatedCommandState();
            setHTMLResult(contentContainerRef.current.innerHTML);
            renderingResultRef.current.innerHTML =
              contentContainerRef.current.innerHTML;
          }}
        />
        <RenderingResultContainer
          HTMLResult={HTMLResult}
          ref={renderingResultRef}
        />
        <HTMLResultContainer HTMLResult={HTMLResult} />
      </section>
      <HiddenInputArea onChange={onUploadImage} ref={hiddenInputRef} />
    </div>
  );
}

export default Editor;

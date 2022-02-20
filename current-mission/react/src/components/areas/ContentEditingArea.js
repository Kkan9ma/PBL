import React from 'react';
import styled from 'styled-components';
import { executeTextCommand } from '../../editing/executeTextCommand';
import { commandKeyMap } from '../../settings';

const ContentEditableComponent = styled.div`
  height: 1000px;
  border: 1px solid rgba(0,0,0,0.3);
  overflow-y: auto;
  padding: 7px;

  &:focus {
    outline: none;
  }
`;

const handleShortcutInput = (event) => {
  if (event.code === 'KeyS' && event.shiftKey && !event.altKey) { // strikethrough
    event.preventDefault();
    executeTextCommand(commandKeyMap[event.code]);
    return;
  }
  if (event.altKey || event.shiftKey) {
    return;
  }
  if (Object.keys(commandKeyMap).includes(event.code)) { // bold, italic, underline
    event.preventDefault();
    executeTextCommand(commandKeyMap[event.code]);
  }
}

const handleKeyDown = (event) => {
  if (!event.ctrlKey && !event.metaKey) { // window: ctrl, macOS: CMD
    return;
  }
  if (Object.keys(commandKeyMap).includes(event.code)) { // bold, italic, underline
    handleShortcutInput(event);
  }
}

function ContentEditingArea() {
  return (
    <ContentEditableComponent className="carlton-content-editing-area" contentEditable suppressContentEditableWarning
      onKeyDown={handleKeyDown}
    >
      contentEditable
    </ContentEditableComponent>
  )
}

export default ContentEditingArea;
import React from 'react';
import styled from 'styled-components';
import { executeTextCommand } from '../../editing/executeTextCommand';
import { $ } from '../../lib/dom';
import { toggleFontColorPaletteDisplay } from '../../lib/utils';
import CommandButtonGroup from '../buttonGroups/CommandButtonGroup';

const NoteToolbar = styled.div`
  background-color: #f5f5f5;
  border: 1px solid rgba(0,0,0,0.3);
  border-bottom-width: 0;
  padding: 8px 5px;
  display: flex;
`;

const onTextCommand = (event) => {
  if (event.target.tagName === 'UL') {
    return;
  }

  const button = event.target.closest('button') ?? $('button', event.target);
  const { command } = button.dataset;

  executeTextCommand(command);
}

const handleClickFontColor = () => {
  toggleFontColorPaletteDisplay();
}

const handleClickImageUpload = (event) => {
  const mediaCommandContainer = event.target.closest('ul');
  const hiddenInput = $('input', mediaCommandContainer);

  hiddenInput.click();
}

const onMediaCommand = (event) => {
  if (event.target.tagName === 'UL') {
    return;
  }

  const button = event.target.closest('button') ?? $('button', event.target);
  const { command } = button.dataset;

  if (command === 'fontColor') {
    handleClickFontColor(event);
    return;
  }

  if (command === 'uploadImage') {
    handleClickImageUpload(event);
    return;
  } 
}

function ToolbarArea({ commandsList }) {
  const commands = commandsList;

  return (
    <NoteToolbar className="note-toolbar">
      <CommandButtonGroup
        key='text-command-button-group'
        commandsList={commands.text} 
        action="text-command" 
        onTextCommand={onTextCommand} 
      />
      <CommandButtonGroup 
        key='media-command-button-group' 
        commandsList={commands.media} 
        action="media-command" 
        isColorPalette
        isHiddenInput
        onMediaCommand={onMediaCommand}
      />
    </NoteToolbar>
  )
}

export default ToolbarArea;

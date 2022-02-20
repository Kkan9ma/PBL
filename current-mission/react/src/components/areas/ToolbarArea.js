import React from 'react';
import styled from 'styled-components';
import CommandButtonGroup from '../buttonGroups/CommandButtonGroup';

const NoteToolbar = styled.div`
  background-color: #f5f5f5;
  border: 1px solid rgba(0,0,0,0.3);
  border-bottom-width: 0;
  padding: 8px 5px;
  display: flex;
`;

function ToolbarArea({ commandsList }) {
  const commands = commandsList;

  return (
    <NoteToolbar className="note-toolbar">
      <CommandButtonGroup commandsList={commands.text} action="text-command" />
      <CommandButtonGroup commandsList={commands.media} action="media-command" isColorPalette={true} isHiddenInput={true} />
    </NoteToolbar>
  )
}

export default ToolbarArea;

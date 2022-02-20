import React from 'react';
import styled from 'styled-components';
import ContentEditingArea from './areas/ContentEditingArea';
import ToolbarArea from './areas/ToolbarArea';
import { executeTextCommand } from '../editing/executeTextCommand';

const NoteContainerDiv = styled.div`
  min-width: 300px;
`

function NoteContainer({ commandsList }) {
  return (
    <>
      <NoteContainerDiv className="note-container">
        <ToolbarArea commandsList={commandsList} executeTextCommand={executeTextCommand} />
        <ContentEditingArea />
      </NoteContainerDiv>
    </>
  )
}

export default NoteContainer;

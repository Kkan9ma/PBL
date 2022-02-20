import React from 'react';
import styled from 'styled-components';
import ContentEditingArea from './areas/ContentEditingArea';
import ToolbarArea from './areas/ToolbarArea';

const NoteContainerDiv = styled.div`
  min-width: 300px;
`

function NoteContainer({ commandsList }) {
  return (
      <NoteContainerDiv className="note-container">
        <ToolbarArea commandsList={commandsList} />
        <ContentEditingArea />
      </NoteContainerDiv>
  )
}

export default NoteContainer;

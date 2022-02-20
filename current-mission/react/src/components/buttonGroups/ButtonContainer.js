import React from 'react';
import styled from 'styled-components';
import { commandButtonIcons } from '../../settings';

const NoteButtonContainer = styled.li`
  display: inline-block;
`;

const NoteCommandButton = styled.button`
  border-width: 1px; 
  border-radius: 2px;
  padding: 6px 9px;
  border-color: #ccc;
  background-color: #fff
`

function ButtonContainer({ command, action }) {
  return (
    <NoteButtonContainer className={`note-button-container ${command}`}>
      <NoteCommandButton className={`note-command-button ${command}`}
        data-command={command}
        data-action-type={action}
      >
        {commandButtonIcons[command]}
      </NoteCommandButton>
    </NoteButtonContainer >
  )
}

export default ButtonContainer;
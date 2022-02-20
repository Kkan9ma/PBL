import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../ColorPalette'
import ButtonContainer from './ButtonContainer';
import HiddenImageInput from '../HiddenImageInput';

const NoteButtonGroup = styled.ul`
  list-style: none;
  margin: 0 20px 0 0 ;
  padding: 0;
  user-select: none
`;

function CommandButtonGroup({ commandsList, action, isColorPalette = false, isHiddenInput = false }) {
  return (
    <>
      <NoteButtonGroup className={`note-button-group ${action}`} >
        {commandsList.map(command => ButtonContainer({ command, action }))}
        {isColorPalette ? <ColorPalette /> : ''}
        {isHiddenInput ? <HiddenImageInput /> : ''}
      </NoteButtonGroup>
    </>
  )
}

export default CommandButtonGroup;

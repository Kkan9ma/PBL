import React from "react";
import ColorPalette from "../ColorPalette"
import ButtonContainer from "./ButtonContainer";
import HiddenImageInput from '../HiddenImageInput';

function CommandButtonGroup({ commandsList, action, isColorPalette = false, isHiddenInput = false }) {
  return (
    <>
      <ul className={`note-button-group ${action}`}>
        {commandsList.map(command => ButtonContainer({ command, action }))}
        {isColorPalette ? <ColorPalette /> : ''}
        {isHiddenInput ? <HiddenImageInput /> : ''}
      </ul>
    </>
  )
}

export default CommandButtonGroup;

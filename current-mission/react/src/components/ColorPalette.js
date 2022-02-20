import React from "react";
import { fontColorMap } from "../settings";

function FontColorButton({ fontColor }) {
  return (
    <button style={{ backgroundColor: fontColor }}></button >
  )
}

function ColorPalette() {
  return (
    <div className='note-font-color-palette palette'>
      {Object.keys(fontColorMap[0]).map(fontColor => <FontColorButton fontColor={fontColor} />)}
    </div>
  )
}

export default ColorPalette;

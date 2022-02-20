import React from 'react';
import styled from 'styled-components';
import { surroundSelectedRange } from '../editing/selection';
import { $create } from '../lib/dom';
import { fontColorMap } from '../settings';

const Palette = styled.div`
  position: absolute;
  top: 50px;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #bababa;
  vertical-align: center;
  padding: 5px;
  display: none;
`

const FontColorButton = styled.button`
  margin: 2px;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(0, 0, 0, 0.25);  
  background-color: ${props => props.fontColor}
`;

function ColorPalette() {
  const onColorText = (fontColor) => {
    const selection = window.getSelection();

    if (!selection.baseNode) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (range.collapsed) {
      return;
    }

    const span = $create('span');

    span.style.color = fontColor;
    surroundSelectedRange(selection, span, true);
  }

  return (
    <Palette className="note-font-color-palette palette">
      {Object.keys(fontColorMap[0]).map((fontColor, index) =>
        <FontColorButton
          key={index}
          fontColor={fontColor}
          onClick={() => { onColorText(fontColor) }}
        />)
      }
    </Palette>
  )
}

export default ColorPalette;

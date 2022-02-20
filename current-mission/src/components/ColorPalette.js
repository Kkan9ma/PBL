import { surroundSelectedRange } from "../editing/selection";
import { $create, on } from "../lib/dom";

export default function ColorPalette({ $target, fontColorMap }) {
  const $colorPalette = $create('div');

  $colorPalette.className = 'note-font-color-palette palette';
  this.target = $target;
  this.state = {
    colors: fontColorMap,
  }

  this.onColorText = (event) => {
    const color = event.target.style.backgroundColor;
    const selection = window.getSelection();

    if (!selection.baseNode) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (range.collapsed) {
      return;
    }

    const span = $create('span');

    span.style.color = color;
    surroundSelectedRange(selection, span, true);
  }

  this.render = () => {
    $colorPalette.innerHTML = `
      ${Object.keys(fontColorMap[0])
        .map(fontColor => `<button style='background-color: ${fontColor}'></div>`)
        .join('')}
    `
    this.target.append($colorPalette);
  }

  this.bindEvents = () => {
    on($colorPalette, 'click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }
      this.onColorText(event);
    })
  }

  this.bindEvents();
}

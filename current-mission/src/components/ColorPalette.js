import { surroundSelectedRange } from "../editing/selection";

const styles = {
  position: 'absolute',
  top: '50px',
  zIndex: '999',
  backgroundColor: '#fff',
  border: '1px solid #bababa',
  verticalAlign: 'center',
  padding: '5px',
  display: 'none',
}

const fontColorButtonStyle = (color) => {
  return `margin: 2px; border: 0; width:15px; height: 15px; background-color: ${color}`
}

export default function ColorPalette({ $target, fontColorMap }) {
  const $colorPalette = document.createElement('div');

  $colorPalette.className = 'note-font-color-palette palette';
  this.target = $target;
  this.state = {
    colors: fontColorMap ? fontColorMap : [],
  }

  for (const style in styles) {
    $colorPalette.style[style] = styles[style];
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

    const span = document.createElement('span');

    span.style.color = color;
    surroundSelectedRange(selection, span, true);
  }

  this.render = () => {
    $colorPalette.innerHTML = `
      ${Object.keys(fontColorMap[0])
        .map(fontColor => `<button style='${fontColorButtonStyle(fontColor)}'></div>`)
        .join('')}
    `
    this.target.append($colorPalette);
  }

  this.bindEvents = () => {
    $colorPalette.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }
      this.onColorText(event);
    })
  }

  this.render();
  this.bindEvents();
}

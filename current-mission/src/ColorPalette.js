const styles = {
  position: 'absolute',
  top: '50px',
  zIndex: '999',
  backgroundColor: '#fff',
  border: '1px solid #bababa',
  verticalAlign: 'center',
  padding: '5px',
}

const fontColorButtonStyle = (color) => {
  return `margin: 2px; border: 0; width:15px; height: 15px; background-color: ${color}`
}

function ColorPalette({ $target, fontColorMap }) {
  const $colorPalette = document.createElement('div');

  $colorPalette.className = 'note-font-color-palette';
  this.target = $target;
  this.state = {
    colors: fontColorMap ? fontColorMap : [],
  }

  for (const style in styles) {
    $colorPalette.style[style] = styles[style];
  }

  this.render = () => {
    $colorPalette.innerHTML = `
      ${Object.keys(fontColorMap[0])
        .map(fontColor => `<button style='${fontColorButtonStyle(fontColor)}'></div>`)
        .join('')}
    `
    this.target.append($colorPalette);
  }
}

export default ColorPalette;

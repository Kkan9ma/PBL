const styles = {
  height: '1000px',
  border: '1px solid rgba(0,0,0,0.3)',
  overflowY: 'auto',
  padding: '7px',
};

export default function ContentEditingArea({ $target, commandsList }) {
  const $contentEditingArea = document.createElement('div');

  $contentEditingArea.className = 'carlton-content-editing-area';
  $contentEditingArea.contentEditable = 'true';

  this.target = $target;
  this.commands = commandsList;
  this.target.appendChild($contentEditingArea);

  for (const style in styles) {
    $contentEditingArea.style[style] = styles[style];
  }

  this.render = () => {
    $contentEditingArea.innerHTML = '';
  };
}

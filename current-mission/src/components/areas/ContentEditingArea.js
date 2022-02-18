import { executeTextCommand } from "../../editing/executeTextCommand";
import { commandKeyMap } from "../../settings";

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

  this.handleShortcutInput = (event) => {
    if (event.code === 'KeyS' && event.shiftKey && !event.altKey) { // strikethrough
      event.preventDefault();
      executeTextCommand(commandKeyMap[event.code]);
      return;
    }
    if (event.altKey || event.shiftKey) {
      return;
    }
    if (Object.keys(commandKeyMap).includes(event.code)) { // bold, italic, underline
      event.preventDefault();
      executeTextCommand(commandKeyMap[event.code]);
    }
  }

  this.handleKeydown = (event) => {
    if (!event.ctrlKey && !event.metaKey) { // window: ctrl, macOS: CMD
      return;
    }
    if (Object.keys(commandKeyMap).includes(event.code)) { // bold, italic, underline
      this.handleShortcutInput(event);
    }
  }

  this.bindEvents = () => {
    $contentEditingArea.addEventListener('keydown', (event) => {
      this.handleKeydown(event);
    })
  }

  this.init = () => {
    this.render();
    this.bindEvents();
  }

  this.init();
}

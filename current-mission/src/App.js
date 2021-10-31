import ContentContainer from './ContentContainer.js';
import Toolbar from './Toolbar.js';
import './styles/styles.css';

export default function App($target) {
  const $div = document.createElement('div');
  $div.id = 'editor';

  this.state = [];

  const handleClick = (event) => {
    const { target } = event;
    const selection = window.getSelection();

    if (target.type !== 'button') {
      return;
    }
    if (!selection.focusNode) {
      return;
    }

    const range = selection.getRangeAt(0);
    const parentNode = range.commonAncestorContainer.parentNode.tagName;
    const currentString = range.toLocaleString();
    const span = document.createElement('span');

    if (target.dataset.command[0].toUpperCase() === parentNode) {
      span.innerText = currentString;
      range.deleteContents();
      range.commonAncestorContainer.parentNode.remove();
      range.insertNode(span);
      return;
    }
    if (target.dataset.command[0].toUpperCase() !== parentNode) {
      const parentEl = document.createElement(parentNode);
      const childEl = document.createElement(
        target.dataset.command[0].toLowerCase(),
      );
      childEl.innerText = currentString;
      parentEl.appendChild(childEl);
      range.deleteContents();
      range.insertNode(childEl);
    }
  };

  this.render = () => {
    new Toolbar($div);
    new ContentContainer($div);

    $target.appendChild($div);
  };

  $target.addEventListener('click', handleClick);
  this.render();
}

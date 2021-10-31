import ContentContainer from './ContentContainer.js';
import Toolbar from './Toolbar.js';
import './styles/styles.css';

export default function App($target) {
  const $div = document.createElement('div');

  $div.id = 'editor';

  const getSelectionRange = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (!range.toLocaleString().length) {
      return false;
    }

    return range;
  };

  const unphraseRange = (range) => {
    const currentString = range.toLocaleString();
    const newNode = document.createTextNode(currentString);

    range.deleteContents();
    range.commonAncestorContainer.parentNode.remove();
    range.insertNode(newNode);
  };

  const getParentElement = (defaultParentTag, currentParentTag) =>
    currentParentTag === defaultParentTag
      ? document.createDocumentFragment()
      : document.createElement(currentParentTag);

  const phraseCurrentRange = (range, phrasingTag, currentParentTag) => {
    const defaultParentTag = 'DIV';
    const parentElement = getParentElement(defaultParentTag, currentParentTag);
    const childElement = document.createElement(phrasingTag);

    childElement.innerText = range.toLocaleString();
    parentElement.appendChild(childElement);
    range.deleteContents();
    range.insertNode(parentElement);
    // TODO: 부모를 검사해서 중복된 태그가 있으면 추가하지 않기.
  };

  const togglePhrasing = (target, selectionRange) => {
    const clickedTag = target.dataset.command[0].toUpperCase();
    const rangeParentNodeTag =
      selectionRange.commonAncestorContainer.parentNode.tagName; // if not anything in there, result will be 'DIV'

    if (clickedTag === rangeParentNodeTag) {
      unphraseRange(selectionRange);

      return;
    }
    phraseCurrentRange(selectionRange, clickedTag, rangeParentNodeTag);
  };

  const handleClick = (event) => {
    const { target } = event;
    const selectionRange = getSelectionRange();

    if (target.type !== 'button' || !selectionRange) {
      return;
    }
    togglePhrasing(target, selectionRange);
  };

  this.render = () => {
    new Toolbar($div);
    new ContentContainer($div);

    $target.appendChild($div);
  };

  $target.addEventListener('click', handleClick);
  this.render();
}

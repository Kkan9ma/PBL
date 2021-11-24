import { execCommand } from './execCommand';

export const firstHalfCommand = () => {
  execCommand('formatBlock', false, 'H1');
};

export const secondHalfCommand = () => {
  execCommand('formatBlock', false, 'H2');
};

export const thirdHalfCommand = () => {
  execCommand('formatBlock', false, 'H3');
};

export const plainTextCommand = () => {
  // ref: https://stackoverflow.com/a/61527420
  const selection = window.getSelection();

  if (!selection.isCollapsed) {
    selection.anchorNode.parentNode.replaceWith(selection.anchorNode);
  }
};

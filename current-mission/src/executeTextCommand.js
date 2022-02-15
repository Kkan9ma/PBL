import { getNodesInRange } from "./dom";
import { textCommandTagMap } from "./settings";

export function executeTextCommand(command) {
  const selection = window.getSelection();

  if (!selection.baseNode) {
    return;
  }

  const range = selection.getRangeAt(0);

  if (range.collapsed) {
    return;
  }

  const isApplied = getNodesInRange(range.cloneRange()).some((element) => {
    if (
      element.nodeType !== 3 && // Element: not text type node
      element.className !== 'carlton-content-editing-area' && // Element: not 'editing area element'
      !element.querySelector('.carlton-content-editing-area') && // Element: not element above of 'editing area element'
      (element.querySelector(textCommandTagMap[command][0].toLowerCase()) || // Element: Have another element below that means text emphasis
        element.querySelector(textCommandTagMap[command][1].toLowerCase())) &&
      element.tagName !== 'DIV'
    ) {
      return true;
    } else if (textCommandTagMap[command].some((tag) => tag === element.tagName)) {
      return true;
    }
    return false;
  });

  console.log(isApplied);
}

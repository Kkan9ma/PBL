import { $, getNodesInRange, getSelectedNodes, isDescendant, isTextNode } from "./dom";
import { removeAppliedTagOnRange, surroundSelectedRange } from "./selection";
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

  const rangeNodes = getNodesInRange(range.cloneRange());
  const [oldTag, newTag] = textCommandTagMap[command];

  const isApplied = rangeNodes.some((element) => {
    if (textCommandTagMap[command].some((tag) => tag === element.tagName)) {
      return true;
    } else if (
      !isTextNode(element) &&
      element.className !== 'carlton-content-editing-area' && // Element: not 'editing area element'
      !element.contains($('.carlton-content-editing-area')) && // Element: not element above of 'editing area element'
      (element.contains($(oldTag.toLowerCase())) || element.contains($(newTag.toLowerCase()))) &&  // Element: Have another element below that means text emphasis
      element.tagName !== 'DIV'
    ) {
      return true;
    }
    return false;
  });

  if (isApplied) {
    removeAppliedTagOnRange(range, [oldTag, newTag]);
    return;
  };

  surroundSelectedRange(selection, newTag)
}

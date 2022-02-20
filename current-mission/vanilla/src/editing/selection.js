import { $, $create, $createFragment, getParent, getSelectedNodes, removeEmptyElements, removeNestedSpans } from "../lib/dom";

export function surroundSelectedRange(selection, element, styleOption = false) {
  const selectedNodes = getSelectedNodes();

  let flag = true;
  let startOffset;
  let endOffset;
  let startContainer;
  let endContainer;
  let lastEndOffset;
  let lastEndContainer;

  for (let i = 0; i < selectedNodes.length; i++) {
    $('.carlton-content-editing-area').normalize();

    if (i === 0) {
      // 첫 node의 경우
      if (selectedNodes[0] === selection.anchorNode) {
        startOffset = selection.anchorOffset;
        startContainer = selection.anchorNode;
        lastEndOffset = selection.focusOffset;
        lastEndContainer = selection.focusNode;
      } else {
        startOffset = selection.focusOffset;
        startContainer = selection.focusNode;
        lastEndOffset = selection.anchorOffset;
        lastEndContainer = selection.anchorNode;
      }
    } else if (flag === false && i !== 0 &&
      // (selectedNodes[i].nodeType === 1 && selectedNodes.tagName !== 'DIV') &&
      // selectedNodes[i].nodeValue && // To ignore whitespace text node.
      selectedNodes[i].textContent.length > 0
    ) {
      // 첫/마지막 node가 아닌 경우 && div를 만난 적 없는 경우
      flag = true;
      startOffset = 0;
      startContainer = selectedNodes[i];
    }
    // if (i === 0 && i === selectedNodes.length - 1) {
    if (i === selectedNodes.length - 1) { // 마지막 node
      endOffset = lastEndOffset;
      endContainer = lastEndContainer;
      flag = false;
    } else if (flag === true && i !== selectedNodes.length - 1 && i !== 0) {
      // 구분자 DIV를 중심으로 나누고, DIV 이전 노드까지를 endContainer로 삼아 한 블록을 완성
      if (
        selectedNodes[i].nodeType === 1 &&
        selectedNodes[i].tagName === 'DIV' &&
        selectedNodes[i - 1].nodeValue && // To ignore whitespace text node.
        selectedNodes[i - 1].textContent.length > 0
      ) {
        flag = false;
        endOffset = selectedNodes[i - 1].textContent.length;
        endContainer = selectedNodes[i - 1];
      }
    }

    if (startContainer && endContainer) {
      // 1. selection direction: from Right to Left
      if (startContainer === endContainer && startOffset > endOffset) {
        const temp = startOffset;

        startOffset = endOffset;
        endOffset = temp;
      }

      const newRange = document.createRange();

      newRange.setStart(startContainer, startOffset);
      newRange.setEnd(endContainer, endOffset);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(newRange);

      const newElement = $create(element.tagName.toLowerCase());

      if (styleOption) {
        Array.from(element.style).forEach((styleType, index) => {
          newElement.style[styleType] = element.style[element.style[index]];
        })
      }
      newElement.append(newRange.extractContents());
      newRange.insertNode(newElement);

      startOffset = null;
      endOffset = null;
      startContainer = null;
      endContainer = null;
      window.getSelection().removeAllRanges();
    }
  }
}

export function removeAppliedTagOnRange(range, tags) {
  const contents = range.cloneContents();

  tags.forEach((tag) => {
    const elements = contents.querySelectorAll(tag.toLowerCase());

    // 특정 tag가 선택한 영역에 있다, 단 다른 태그도 섞여 있는 경우.
    if (elements.length > 0) {
      elements.forEach((element) => {
        const fragment = range.createContextualFragment(element.innerHTML);

        element.replaceWith(fragment);
      });
      range.deleteContents();
      range.insertNode(contents);
    } else {
      // 선택한 영역에 원하는 tag가 있다.
      // 모두 선택한 tag의 강조 표시로 되어 있다. ex) <strong>123</strong>

      const newElement = $create('span');
      const parent = getParent(tag.toUpperCase(), range);

      if (!parent) {
        return;
      }

      newElement.appendChild(range.extractContents());
      range.insertNode(newElement);

      const newFragment = $createFragment();

      parent.childNodes.forEach((childNode) => {
        if (childNode.tagName === 'SPAN') {
          // remove nested span in fragment 
          /* ex) 
            <span>
              <span>
                <span></span>
              </span>
            </span>
          */
          const tempFragment = $createFragment();
          const fragmentContents = range.createContextualFragment(childNode.innerHTML);

          tempFragment.append(fragmentContents);
          newFragment.append(tempFragment);
        } else {
          // remove nested tags 
          const temp = $create(tag.toLowerCase());

          if (childNode.innerHTML) {
            temp.innerHTML = childNode.innerHTML;
          } else {
            temp.innerHTML = childNode.textContent;
          }
          newFragment.appendChild(temp);
        }
      });

      Array.from(newFragment.children).forEach((element) => {
        if (element.textContent === '') {
          element.remove();
        }
      });
      removeEmptyElements(newFragment.children);

      range.commonAncestorContainer.replaceWith(newFragment);
    }
    range.collapse();

    removeEmptyElements($('.carlton-content-editing-area').querySelectorAll('*'));
    removeNestedSpans($('.carlton-content-editing-area'));
  });

  $('.carlton-content-editing-area').normalize();
}

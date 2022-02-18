// cf) https://stackoverflow.com/a/7931003

function getNextNode(node) {
  if (node.firstChild) {
    return node.firstChild;
  }
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
  return null;
}

export function getNodesInRange(range) {
  const start = range.startContainer;
  const end = range.endContainer;
  const commonAncestor = range.commonAncestorContainer;
  const nodes = [];
  let node;

  // walk parent nodes from start to common ancestor
  for (node = start.parentNode; node; node = node.parentNode) {
    nodes.push(node);
    if (node === commonAncestor) {
      break;
    }
  }
  nodes.reverse();

  // walk children and siblings from start until end is found
  for (node = start; node; node = getNextNode(node)) {
    nodes.push(node);
    if (node === end) {
      break;
    }
  }

  return nodes;
}

export function nextNode(node) {
  if (node.hasChildNodes()) {
    return node.firstChild;
  }
  while (node && !node.nextSibling) {
    node = node.parentNode;
  }
  if (!node) {
    return null;
  }
  return node.nextSibling;
}

export function getRangeSelectedNodes(range) {
  let node = range.startContainer;
  const endNode = range.endContainer;
  const rangeNodes = [];

  // Special case for a range that is contained within a single node
  if (node === endNode) {
    return [node];
  }

  // Iterate nodes until we hit the end container
  while (node && node !== endNode) {
    rangeNodes.push((node = nextNode(node)));
  }

  // Add partially selected nodes at the start of the range
  node = range.startContainer;
  while (node && node !== range.commonAncestorContainer) {
    rangeNodes.unshift(node);
    node = node.parentNode;
  }

  return rangeNodes;
}

export function getSelectedNodes() {
  if (window.getSelection) {
    const sel = window.getSelection();
    if (!sel.isCollapsed) {
      return getRangeSelectedNodes(sel.getRangeAt(0));
    }
  }
  return [];
}

export function getParent(tagName, range) {
  let ret;

  ret = range.commonAncestorContainer;

  while (ret && ret.tagName !== tagName) {
    ret = ret.parentNode;
  }
  return ret;
}

export function removeEmptyElements(nodeList) {
  Array.from(nodeList).forEach((element) => {
    if (element.textContent === '') {
      element.remove();
    }
  })
}

export function removeNestedSpans($target) {
  Array.from($target.querySelectorAll('span')).forEach((element) => {
    const childSpan = element.querySelector('span');

    if (childSpan) {
      element.innerHTML = childSpan.innerHTML;
    }
  });
}

export function $($target, scope = document) {
  return scope.querySelector($target);
}

export function isTextNode(node) {
  return node && node.nodeType === 3;
}

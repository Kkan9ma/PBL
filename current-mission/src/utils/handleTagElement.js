export const adjustImageTagSize = (target) => {
  const width = prompt(`조정할 너비: (현재 너비: ${target.width})`);
  if (width && parseInt(width, 10)) {
    target.width = width;
  }

  const height = prompt(`조정할 높이 (현재 높이: ${target.height})`);
  if (height && parseInt(height, 10)) {
    target.height = height;
  }
};

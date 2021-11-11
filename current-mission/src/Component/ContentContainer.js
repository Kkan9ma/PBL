import React from 'react';
import { adjustImageTagSize } from '../utils/handleTagElement';

const handleClick = (e) => {
  const { target } = e;

  if (target.tagName === 'IMG') {
    adjustImageTagSize(target);
  }
};

function ContentContainer() {
  return (
    <>
      <div
        className="editor__content-container"
        style={{ width: '500px', height: '500px', border: '1px solid black' }}
        contentEditable="true"
        onClick={handleClick}
      ></div>
    </>
  );
}

export default ContentContainer;

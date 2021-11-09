import React from 'react';

function ContentContainer() {
  return (
    <>
      <div
        className="editor__content-container"
        style={{ width: '500px', height: '500px', border: '1px solid black' }}
        contentEditable="true"
      ></div>
    </>
  );
}

export default ContentContainer;

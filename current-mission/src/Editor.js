import React from 'react';
import Toolbar from './Component/Toolbar';
import ContentContainer from './Component/ContentContainer';

function Editor() {
  return (
    <>
      <div className="editor">
        <Toolbar />
        <ContentContainer />
      </div>
    </>
  );
}

export default Editor;

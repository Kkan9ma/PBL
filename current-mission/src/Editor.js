import React from 'react';
import Toolbar from './Component/Toolbar';
import ContentContainer from './Component/ContentContainer';
import { commandsList } from './constants.js';

function Editor() {
  return (
    <>
      <div className="editor">
        <Toolbar commandsList={commandsList} />
        <ContentContainer />
      </div>
    </>
  );
}

export default Editor;

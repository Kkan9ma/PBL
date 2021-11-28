import React from 'react';
import DocumentElementCommandsButtonList from '../commandButtonLists/DocumentElementCommandsButtonList.js';
// import DocumentElementCommandsButtonList from '../DocumentElementCommandsButtonList';
import { StyledDefaultToolbar } from './style.js';

function DocumentElementCommandsToolbar({ commands, handleClick }) {
  return (
    <StyledDefaultToolbar
      className="editor__toolbar"
      data-toolbar="text-property-commands"
    >
      <DocumentElementCommandsButtonList
        commands={commands}
        handleClick={handleClick}
      />
    </StyledDefaultToolbar>
  );
}

export default DocumentElementCommandsToolbar;

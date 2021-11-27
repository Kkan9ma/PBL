import React from 'react';
import DocumentElementCommandsButtonList from '../DocumentElementCommandsButtonList';

function DocumentElementCommandsToolbar({
  commands,
  handleClick,
}) {
  return (
    <ul
      className="editor__toolbar"
      data-toolbar="text-property-commands"
      style={{ margin: '0', padding: '0' }}
    >
      <DocumentElementCommandsButtonList
        commands={commands}
        handleClick={handleClick}
      />
    </ul>
  );
}

export default DocumentElementCommandsToolbar;

import React from 'react';
import styled from 'styled-components';
import DocumentElementCommandsButtonList from '../DocumentElementCommandsButtonList';

const StyledDefaultToolbar = styled.ul`
  margin: 0px;
  padding: 0px;
`;

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

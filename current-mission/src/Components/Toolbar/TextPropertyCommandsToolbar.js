import React from 'react';
import styled from 'styled-components';
import TextPropertyCommandsButtonList from '../TextPropertyCommandsButtonList';

const StyledDefaultToolbar = styled.ul`
  margin: 0px;
  padding: 0px;
`;

function TextPropertyCommandsToolbar({
  commands,
  activatedCommands,
  handleClick,
}) {
  return (
    <StyledDefaultToolbar
      className="editor__toolbar"
      data-toolbar="text-property-commands"
    >
      <TextPropertyCommandsButtonList
        commands={commands}
        activatedCommands={activatedCommands}
        handleClick={handleClick}
      />
    </StyledDefaultToolbar>
  );
}

export default TextPropertyCommandsToolbar;

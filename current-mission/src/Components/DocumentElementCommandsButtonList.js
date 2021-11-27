import React from 'react';
import { getCommandValue } from '../commands/commandsUtils';
import DocumentElementCommandsButton from './DocumentElementCommandButton';

function DocumentElementCommandsButtonList({
  commands,
  handleClick,
}) {
  return (
    <>
      {commands.map((command, index) => {
        const value = getCommandValue('documentElement', command);

        return (
          <DocumentElementCommandsButton
            key={index}
            command={command}
            value={value}
            onClick={(e) => {
              handleClick(e);
            }}
          />
        );
      })}
    </>
  );
}

export default DocumentElementCommandsButtonList;

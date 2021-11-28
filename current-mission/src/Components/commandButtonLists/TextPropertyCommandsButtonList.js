import React from 'react';
import { getCommandValue } from '../../commands/commandsUtils';
import TextPropertyCommandButton from '../commandButtons/TextPropertyCommandButton';

function TextPropertyCommandsButtonList({
  commands,
  handleClick,
  activatedCommands,
}) {
  return (
    <>
      {commands.map((command, index) => {
        const value = getCommandValue('textProperty', command);

        return (
          <TextPropertyCommandButton
            key={index}
            command={command}
            value={value}
            onClick={(e) => {
              handleClick(e);
            }}
            isSelected={activatedCommands.includes(command)}
          />
        );
      })}
    </>
  );
}

export default TextPropertyCommandsButtonList;

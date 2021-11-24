import React from 'react';
import { getCommandValue } from '../commands/commandsUtils';
import Button from './Button';

function CommandsButtonList({ commands, handleClick, activatedCommands }) {
  return (
    <>
      {commands.map((command, index) => {
        const value = getCommandValue(command);

        return (
          <Button
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

export default CommandsButtonList;

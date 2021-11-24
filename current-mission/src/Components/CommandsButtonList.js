import React from 'react';
import Button from './Button';

function CommandsButtonList({ commandsList, activatedCommands, handleClick }) {
  return (
    <>
      {commandsList.map(({ command, value, execCommand }, index) => (
        <Button
          key={index}
          command={command}
          value={value}
          onClick={() => {
            execCommand(command, value);
            handleClick();
          }}
          isSelected={activatedCommands.includes(command)}
        />
      ))}
    </>
  );
}

export default CommandsButtonList;

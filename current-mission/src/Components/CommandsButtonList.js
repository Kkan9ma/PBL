import React from 'react';
import Button from './Button';

function CommandsButtonList({
  commandsList,
  activatedCommands,
  handleButtonActivatedState,
}) {
  return (
    <>
      {commandsList.map(({ command, value, execCommand }, index) => (
        <Button
          key={index}
          command={command}
          value={value}
          onClick={() => {
            execCommand(command, value);
            handleButtonActivatedState();
          }}
          isSelected={activatedCommands.includes(command)}
        />
      ))}
    </>
  );
}

export default CommandsButtonList;

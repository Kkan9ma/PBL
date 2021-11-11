import React, { useState } from 'react';
import Button from './Button';

function CommandsButtonList({
  commandsList,
  activatedCommands,
  handleButtonActivatedState,
}) {
  return (
    <>
      {commandsList.map(({ command, text, execCommand }, index) => (
        <Button
          key={index}
          command={command}
          text={text}
          onClick={() => {
            execCommand(command, text);
            handleButtonActivatedState();
          }}
          isSelected={activatedCommands.includes(command)}
        />
      ))}
    </>
  );
}

export default CommandsButtonList;

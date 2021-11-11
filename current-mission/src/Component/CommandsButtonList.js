import React from 'react';
import Button from './Button';

function CommandsButtonList({ commandsList }) {
  return (
    <>
      {commandsList.map(({ command, text, execCommand }, index) => (
        <Button
          key={index}
          command={command}
          text={text}
          onClick={() => {
            execCommand(command, text);
          }}
        />
      ))}
    </>
  );
}

export default CommandsButtonList;

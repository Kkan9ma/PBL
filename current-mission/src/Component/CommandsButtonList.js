import React from 'react';
import Button from './Button';

const handleClickFormatBlockButton = (command, text) => {
  document.execCommand(command, false, text);
};

const handleClickCommandButton = (command) => {
  document.execCommand(command);
};

const handleClickButton = (command, text) => {
  command === 'formatBlock'
    ? handleClickFormatBlockButton(command, text)
    : handleClickCommandButton(command);
};

function CommandsButtonList({ commandsList }) {
  return (
    <>
      {commandsList.map(({ command, text }, index) => (
        <Button
          key={index}
          command={command}
          text={text}
          onClick={() => {
            handleClickButton(command, text);
          }}
        />
      ))}
    </>
  );
}

export default CommandsButtonList;

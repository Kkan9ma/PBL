import React from 'react';
import Button from './Button';

const handleClickButton = (command) => {
  document.execCommand(command);
};

function ButtonList({ commands }) {
  return (
    <>
      {commands.map(function ({ command, text }, index) {
        return (
          <Button
            key={index}
            command={command}
            text={text}
            onClick={() => {
              handleClickButton(command);
            }}
          />
        );
      })}
    </>
  );
}

export default ButtonList;

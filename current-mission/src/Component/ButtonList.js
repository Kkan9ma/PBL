import React from 'react';
import Button from './Button';

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
              console.log('click');
            }}
          />
        );
      })}
    </>
  );
}

export default ButtonList;

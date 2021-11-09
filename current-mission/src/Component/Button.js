import React from 'react';

function Button({ command, text, onClick }) {
  return (
    <button
      type="button"
      className="editor__button"
      data-command={command}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

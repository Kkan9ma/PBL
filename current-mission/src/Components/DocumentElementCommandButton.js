import React from 'react';

function DocumentElementCommandsButton({ command, value, onClick }) {
  const defaultButtonStyle = {
    width: '55px',
    height: '55px',
    fontSize: '10px',
    backgroundColor: '#FFFFFF',
    color: '#333',
    borderRadius: '50%',
    margin: '2px 2px 10px 2px',
    outline: '0',
  };

  return (
    <button
      type="button"
      className="editor__button"
      data-command={command}
      onClick={onClick}
      style={defaultButtonStyle}
    >
      {value}
    </button>
  );
}

export default DocumentElementCommandsButton;

import React from "react";
import { commandButtonIcons } from "../../settings";

function ButtonContainer({ command, action }) {
  return (
    <li className='note-button-container'>
      <button
        className='note-command-button'
        data-command={command}
        data-action-type={action}
      >
        {commandButtonIcons[command]}
      </button>
    </li>
  )
}

export default ButtonContainer;
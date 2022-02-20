import React from "react";
import ContentEditingArea from "./areas/ContentEditingArea";
import ToolbarArea from "./areas/ToolbarArea";
import { executeTextCommand } from '../editing/executeTextCommand';

function NoteContainer({ commandsList }) {
  return (
    <>
      <div className="note-container">
        <ToolbarArea commandsList={commandsList} executeTextCommand={executeTextCommand} />
        <ContentEditingArea />
      </div>
    </>
  )
}

export default NoteContainer;
